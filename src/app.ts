import { PLATFORM } from 'aurelia-pal';
export class App {
  public message = 'Hello World!';
  viewModel = PLATFORM.moduleName("my-component/my-component");
  myNum=5
  add(){
    this.myNum++;
  }
}
