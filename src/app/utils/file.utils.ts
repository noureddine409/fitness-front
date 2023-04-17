export function onFileChange(event: any, targetVariable: any) {
  if (event.target.files && event.target.files.length) {
    targetVariable = event.target.files[0];
  }
}
