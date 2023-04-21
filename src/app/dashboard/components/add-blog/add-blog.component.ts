import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ALERT_MESSAGES} from "../../../@shared/constants";
import {NavigationStart, Router} from "@angular/router";
import {removeFromSetAtIndex, updateSetFromValueChanges} from "../../../utils/selection-box.util";
import {BlogService} from "../../../@core/services/blog-service/blog.service";
import {BlogDto} from "../../../@core/models/blog.model";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent {
  showModal = false;
  blogForm!: FormGroup;
  sectionForm!: FormGroup;

  errorMessage = "";

  submitted!: boolean;
  loading!: boolean;
  selectedTags = new Set<string>();
  blogDto!: BlogDto;
  private picture!: File;

  constructor(private readonly blogService: BlogService, private readonly fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.blogForm = this.fb.group({
      'blog-name': ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]],
      'blog-picture': [null, [Validators.required]],
      'blog-content': ['', [Validators.required, Validators.minLength(10)]],
      'selected-tags': [[]],
    });


    updateSetFromValueChanges(this.selectedTags, 'selected-options', this.blogForm);


  }

  removeTag(index: number) {
    removeFromSetAtIndex(this.selectedTags, index);
    console.log(this.selectedTags)
  }

  addTag(tag: string) {
    if(tag.length ==0) return
    this.selectedTags.add(tag);
    console.log(this.selectedTags);
  }

  onPictureChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.picture = event.target.files[0];
    }
  }

  saveChanges() {
    // Set the submitted flag to true
    this.submitted = true;

    if (this.blogForm.invalid) {
      this.showModal = false;
      return;
    }

    if (confirm("Are you sure you want to save changes?")) {
      // Set the loading flag to true
      this.loading = true;

      const name = this.blogForm.get('blog-name')!.value;
      const blogContent = this.blogForm.get('blog-content')!.value;

      console.log(this.selectedTags)
      this.blogDto = {
        name: name,
        content: blogContent,
        tags: [...this.selectedTags],
      };

      console.log(this.blogDto)

      const blogBlob = new Blob([JSON.stringify(this.blogDto)], {type: 'application/json'});

      this.blogService.save(blogBlob, this.picture).subscribe(
        (blog) => {
          // Set the loading flag to false
          this.loading = false;
          this.router.navigate([`/dashboard/blog-details/${blog.id}`]);
        },
        error => {
          // Set the loading flag to false
          this.loading = false;
          this.errorMessage = ALERT_MESSAGES.PROGRAM.ERROR;
        }
      )
    }
  }




}
