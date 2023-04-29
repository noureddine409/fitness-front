import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ALERT_MESSAGES} from "../../../@shared/constants";
import {ActivatedRoute, Router} from "@angular/router";
import {removeFromSetAtIndex, updateSetFromValueChanges} from "../../../utils/selection-box.util";
import {BlogService} from "../../../@core/services/blog-service/blog.service";
import {BlogDto, BlogPatchDto} from "../../../@core/models/blog.model";

@Component({
  selector: 'app-modify-blog',
  templateUrl: './modify-blog.component.html',
  styleUrls: ['./modify-blog.component.css']
})
export class ModifyBlogComponent {
  showModal = false;
  blogForm!: FormGroup;

  errorMessage = "";

  submitted!: boolean;
  loading!: boolean;
  selectedTags = new Set<string>();
  blogPatchDto!: BlogPatchDto;
  blogId!: number;
  blogData!: BlogDto;
  private picture!: File;

  constructor(private readonly blogService: BlogService, private readonly fb: FormBuilder, private router: Router,private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const param = this.activatedRoute.snapshot.paramMap.get("id")
    if (param == null) {
      this.router.navigate(['/error-404']);
      return;
    }
    this.blogId = parseInt(param, 10);
    this.blogService.findById(this.blogId).subscribe(
      data => {
        this.blogData = data;
        this.initializeBlogForm();
      },
      () => {
        this.router.navigate(["/error-404"]);
      }
    );
  }

  initializeBlogForm() {
    this.blogForm = this.fb.group({
      'blog-name': [this.blogData.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]],
      'blog-content': [this.blogData.content, [Validators.required, Validators.minLength(10)]],
      'selected-tags': [this.blogData.tags],
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
      this.blogPatchDto = {
        name: name,
        content: blogContent,
        tags: [...this.selectedTags],
      };

      console.log(this.blogPatchDto)

      this.blogService.update(this.blogId,this.blogPatchDto).subscribe(
        (blog) => {
          // Set the loading flag to false
          this.loading = false;
          this.router.navigate([`/dashboard/blog-details/${blog.id}`]);
        },
        () => {
          // Set the loading flag to false
          this.loading = false;
          this.errorMessage = ALERT_MESSAGES.BLOG.ERROR;
        }
      )
    }
  }




}
