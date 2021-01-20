import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CommentService } from 'src/service/comment.service';

declare var get :any;
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  
  //@ViewChild('dataTable') table;
 // dataTable: any;
  
  commentForm : FormGroup;
  

  constructor(private modalService: NgbModal,private commentService : CommentService){ }
  /*commentList=[
    {"id":1,"comment":"BATCH CODE DEFACED"},
    {"id":2,"comment":"Test"},
    {"id":3,"comment":"UPCOVER LABEL"},
    {"id":4,"comment":"UV DEFACED"}
    
  ];*/
  commentList=[];

  getcommentList():any{
    this.commentService.getPosts().subscribe(data => {
      // console.log(data.Comments)
      this.commentList = data.Comments;
    },
      error=>{
        return console.log("Error::" + error);
      });
      get(this.commentList);
      return this.commentList;
  }
  selectedCommentId:number;
  ngOnInit() {
    /*this.commentForm = this.fb.group({
      comment : ['COMMENT' , Validators.required] ,
      commentVal:['']
    });*/
    
   // this.dataTable = $(this.table.nativeElement);
   // this.dataTable.DataTable();
   this.getcommentList();
  //  setInterval(()=>
  //    this.getcommentList(),1000);

    
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
 
  addComment(comment: string) {
  //this.commentList.push({"id": 4, "comment": comment});
  console.log(comment);
  
  var addCommentVal={
    "CommentDescription" : comment
  }
    this.commentService.addPosts(addCommentVal).subscribe(data => {
      console.log(data)
      this.getcommentList();
    }) ;
    console.log(addCommentVal);
  }
  

  edit(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
 

  getCommentId(id: number) {
    return this.selectedCommentId = id;
  }

  updateComment(comment: string) {
   // this.commentList.find(c => c.id === this.selectedCommentId).comment = comment;
   var updateCommentVal={
    "CommentDescription" : comment
  }
    this.commentService.editPosts(this.selectedCommentId,updateCommentVal).subscribe(data => {
      console.log(data);
      this.getcommentList();
    }) ;
    
  }
 
 
  deleteComment(id: number) {
    //this.commentList.splice(this.commentList.findIndex(c => c.id === id), 1);

    this.commentService.deletePosts(id).subscribe(data => {
      console.log(data);
      this.getcommentList();
    }) ;
   

  }
  

}
