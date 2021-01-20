import { staticViewQueryIds } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CountryService } from 'src/service/country.service';

declare var get :any;

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

   
  //@ViewChild('dataTable') table;
 // dataTable: any;
  
 countryForm : FormGroup;
 constructor(private modalService: NgbModal,private countryService : CountryService){ }
 /*countryList=[
   {"id":1,"country":"CHILI","alternateCountry":"CHILI"},
   {"id":2,"country":"SINGAPORE","alternateCountry":"SINGAPORE"},
   {"id":3,"country":"INDIA","alternateCountry":"INDIA"},
   {"id":4,"country":"BOLIVIA","alternateCountry":""},
   {"id":5,"country":"SOUTH AFRICA","alternateCountry":""},
   {"id":6,"country":"BELIZE","alternateCountry":""},
   {"id":7,"country":"GERMANY","alternateCountry":""},
   {"id":8,"country":"CAYMAN ISLANDS","alternateCountry":""},
   {"id":9,"country":"BRAZIL","alternateCountry":""},
   {"id":10,"country":"SPAIN","alternateCountry":""}
 ];*/
 countryList:any[];

  getcountryList():any{
    this.countryService.getPosts().subscribe(data => {
      console.log(data);
      this.countryList = data.Countries;
    },
      error=>{
        return console.log("Error::" + error);
      });
      get(this.countryList);
      return this.countryList;
  }

 selectedCountryId:number;
 dtOptions: DataTables.Settings = {};
 ngOnInit() {
   /*this.commentForm = this.fb.group({
     comment : ['COMMENT' , Validators.required] ,
     commentVal:['']
   });*/
   /*this.dtOptions = {
    //pagingType: 'full_numbers',
    paging:enable,
   lengthMenu:[10,25,30],
   lengthChange:true,
   
   ajax:
    processing: true
  };*/
  //get();
   this.getcountryList();

  // this.dataTable = $(this.table.nativeElement);
  // this.dataTable.DataTable();
   
 }
 open(content: any) {
   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
 }
 
 addCountry(country: string,alternateCountry : string) {
   //this.countryList.push({id:12,"country":country,alternateCountry:""});
   var addCountryVal={
    "CountryDescription" : country,
    "AlterName":alternateCountry
   }
    this.countryService.addPosts(addCountryVal).subscribe(data => {
      console.log(data)
      this.getcountryList();
    }) ;
    console.log(addCountryVal);
   return this.countryList;
   console.log(this.countryList);
 }

 edit(content: any) {
   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
 }


 getCountryId(id: number) {
   this.selectedCountryId = id;
   return this.selectedCountryId;
 }
  

 updateCountry(country: string,alternateCountry :string) {
   //this.countryList.find(c => c.id === this.selectedCountryId).country = country;
  // this.countryList.find(c => c.id === this.selectedCountryId).alternateCountry = alternateCountry;
   var updateCountryVal={
    "CountryDescription" : country,
    "AlterName":alternateCountry
  }
    this.countryService.editPosts(this.selectedCountryId,updateCountryVal).subscribe(data => {
      console.log(data);
      this.getcountryList();
    }) ;
 }


 deleteCountry(id: number) {
   //this.countryList.splice(this.countryList.findIndex(c => c.id === id), 1);
   this.countryService.deletePosts(id).subscribe(data => {
    console.log(data);
    this.getcountryList();
  }) ;
 
 }

}
