import { BlogPostsSearchComponent } from './components/blog-posts-search/blog-posts-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'blog-post-search',pathMatch: 'full'},
  {path:'blog-post-search', component:BlogPostsSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
