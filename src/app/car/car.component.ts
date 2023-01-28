import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
    this.positionForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', Validators.required],
      ownernumber: ['', Validators.required],
      address: ['', Validators.required],
      detail: ['', Validators.required],
      selectitem: [''],
    });
  }

  ngOnInit(): void {
    //code to read from localstorage
    let data = JSON.parse(localStorage.getItem('carList') || '');
    let converteData = JSON.parse(data || '');
    //     let data=(localStorage.getItem('carList'));

    console.log('data', data);
  }
  positionForm: FormGroup;
  // name = "";
  // email = "";
  // ownernumber = "";
  // address = "";
  // detail = "";
  selectitem = '';
  filleverform = 'no'; //submit button hide unhide
  validation = 'no';
  carList: any = [];

  submit() {
    this.filleverform = 'yes';
    this.validation = 'yes';
    console.log('valid', this.positionForm.controls['name'].errors);
    //     this.carList.push(this.positionForm.value);
    //     //code to add from localstorage
    // localStorage.setItem('carList',JSON.stringify(this.carList));

    //     console.log("user", this.positionForm)
    //     Swal.fire({
    //       position: 'top-end',
    //       icon: 'success',
    //       title: 'Your work has been saved',
    //       showConfirmButton: false,
    //       timer: 1500
    //     })
  }
  clear() {
    // this.name = "";
    // this.email = "";
    // this.ownernumber = "";
    // this.address = "";
    // this.detail = "";
    this.positionForm.reset();
  }

  delete(i: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        this.carList.splice(i, 1);
        //code to delete from localstorage
        localStorage.setItem('carList', JSON.stringify(this.carList));
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          );
        }
      });
  }

  edit(i: any) {
    this.selectitem = i;
    this.positionForm.patchValue({
      name: this.carList[i].name,
      email: this.carList[i].email,
      ownernumber: this.carList[i].ownernumber,
      address: this.carList[i].address,
      detail: this.carList[i].detail,
    });
    // this.name = this.carList[i].name;

    console.log('i');
  }
  update() {
    // this.carList[this.selectitem].name = this.name;
    this.carList[this.selectitem].name = this.positionForm.value.name;
    this.carList[this.selectitem].email = this.positionForm.value.email;
    this.carList[this.selectitem].ownernumber =
      this.positionForm.value.ownernumber;
    this.carList[this.selectitem].detail = this.positionForm.value.detail;
    this.carList[this.selectitem].address = this.positionForm.value.address;
    //code to update from localstorage
    localStorage.setItem('carList', JSON.stringify(this.carList));
    console.log('i', this.positionForm.value);
    this.filleverform = 'no';
    this.clear();
    Swal.fire({
      title: 'Do you want to do any changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    });
  }
}
