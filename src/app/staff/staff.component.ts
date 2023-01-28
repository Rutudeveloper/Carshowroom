import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor(private formBuilder: FormBuilder
    ) { 
      this.positionForm = this.formBuilder.group(
        {
          name1:['',[Validators.required, Validators.minLength(6)]],
         email1 :['',Validators.required],
         password1 :['',Validators.required],
         previous :['',Validators.required],
       duration :['',Validators.required],
        selectitem :[''],
        }

      )
    }

  ngOnInit(): void {
        //code to read from localstorage
    let data=JSON.parse(localStorage.getItem('staffList') ||'');
    let converteData =  JSON.parse(data || '')
  }
  positionForm:FormGroup;
  // name1 = "";
  // email1 = "";
  // password1 = "";
  // previous = "";
  // duration = "";
  selectitem1 = "";
  filleverform = 'no';  //submit button hide unhide
  filleverform1 = 'no';  //submit button hide unhide
  validation1 = 'no';
  staffList: any = []


  
  submit1() {
   
    this.validation1 = 'yes';
    console.log('valid', this.positionForm.controls['name'].errors);
    // this.staffList.push(this.positionForm.value);
    // //code to add from localstorage
    // localStorage.setItem('carList',JSON.stringify(this.staffList));   
    //  console.log("user", this.positionForm)
    // this.clear()
    // this.filleverform1 = 'yes';

    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: 'Your work has been saved',
    //   showConfirmButton: false,
    //   timer: 1500
    // })

  }


  clear() {
   
 this.positionForm.reset()
  }
  
  delete1(i: any) {

    
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
        this.staffList.splice(i, 1)
    //code to delete from localstorage
    localStorage.setItem('carList',JSON.stringify(this.staffList)); 
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
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

  edit1(i: any) {
    this.selectitem1 = i;
    this.filleverform1 = 'yes';
    // this.name1 = this.staffList[i].name1;
    this.positionForm.patchValue(
      {
        name1:this.staffList[i].name1,
        email1:this.staffList[i].email1,
       password1:this.staffList[i].password1,
       preivous:this.staffList[i].preivous,
       duration:this.staffList[i].duration

      }
    )
  }

  update1() {
    // this.staffList[this.selectitem1].name1 = this.name1;
    this.staffList[this.selectitem1].name1 =this.positionForm.value.name1;
    this.staffList[this.selectitem1].email1 =this.positionForm.value.email1;
    this.staffList[this.selectitem1].password1 =this.positionForm.value.password1;
    this.staffList[this.selectitem1].preivous =this.positionForm.value.preivous;
   this.staffList[this.selectitem1].duration =this.positionForm.value.duration;
     //code to update from localstorage
     localStorage.setItem('carList',JSON.stringify(this.staffList)); 
     console.log("i",this.positionForm.value )
    this.filleverform1 = 'no';
    this.clear()
    Swal.fire(
      'updated!',
      'You clicked the button!',
      'success'
    )
   
  }
}

