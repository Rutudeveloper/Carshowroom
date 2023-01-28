import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-carpart',
  templateUrl: './carpart.component.html',
  styleUrls: ['./carpart.component.scss']
})
export class CarpartComponent implements OnInit {

  constructor(private formBuilder: FormBuilder
    ) { 
      this.positionForm = this.formBuilder.group(
        {
          name2 :[''],
         email2 :[''],
        password2 :[''],
       number1 :[''],
       date1 :[''],
        }

      )
    }

  ngOnInit(): void {
    //code to read the localstorage

  let data=JSON.parse(localStorage.getItem('partList') ||'');
  let converteData =  JSON.parse(data || '')
  // let data=(localStorage.getItem('carList'));

  console.log("data",data);
  
  }
  positionForm:FormGroup;
  selectitem1 = "";
  filleverform2 = 'no';  //submit button hide unhide
  partList: any = []



  
  submit2() {
    this.partList.push(this.positionForm.value);
    console.log("user", this.positionForm)
    this.clear()
        //code to add the localstorage

    localStorage.setItem('partList',JSON.stringify(this.partList));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
  clear() {
this.positionForm.reset()
  }

  delete2(i: any) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.partList.splice(i, 1)
    //code to delete from localstorage

        localStorage.setItem('partList',JSON.stringify(this.partList));

        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        
      } 
      else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  edit2(i: any) {
    this.selectitem1 = i;
    this.filleverform2 = 'yes';
    this.positionForm.patchValue(
      {
        name2:this.partList[i].name2,
        email2:this.partList[i].email2,
       password2:this.partList[i].password2,
       number1:this.partList[i].number1,
       date1:this.partList[i].date1

      }
    )    

  }

  update2() {
    this.partList[this.selectitem1].name2 =this.positionForm.value.name2;
    this.partList[this.selectitem1].email2 =this.positionForm.value.email2;
    this.partList[this.selectitem1].password2 =this.positionForm.value.password2;
    this.partList[this.selectitem1].number1 =this.positionForm.value.number1;
   this.partList[this.selectitem1].date1 =this.positionForm.value.date1;
    this.filleverform2 = 'no';
    this.clear()
    //code to update from localstorage

    localStorage.setItem('partList',JSON.stringify(this.partList));

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been update successfully ',
      showConfirmButton: false,
      timer: 1500
    })
  }
  
}

