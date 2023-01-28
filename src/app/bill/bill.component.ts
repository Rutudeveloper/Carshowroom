import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
    import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

 
  constructor(private formBuilder: FormBuilder
    ) { 
      this.positionForm = this.formBuilder.group(
        {
          discription :[''],
          qty :[''],
          date :[''],
          rate :[''],
          amount :[''],
        }

      )
    }

  ngOnInit(): void {
        //code to read from localstorage
    let data=JSON.parse(localStorage.getItem('billList') ||'');
    let converteData =  JSON.parse(data || '')
  }

  positionForm:FormGroup;
  selectitem3 = "";
 filleverform3 = 'no';  //submit button hide unhide
billList: any = []



  submit4() {
this.billList.push(this.positionForm.value);
   //code to add from localstorage
localStorage.setItem('billList',JSON.stringify(this.billList));

console.log("user", this.positionForm)
    this.clear()
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


  delete4(i: any) {

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
      this.billList.splice(i, 1)
   //code to delete from localstorage
   localStorage.setItem('billList',JSON.stringify(this.billList));
      if (result.isConfirmed) {
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

  edit4(i: any) {
    this.selectitem3 = i;
    this.filleverform3 = 'yes';
    this.positionForm.patchValue(
      {
        discription  :this.billList[i].discription,
        qty:this.billList[i].qty,
        date:this.billList[i].date,
        rate:this.billList[i].rate,
        amount:this.billList[i].amount

      }
    )
    console.log("i", this.billList[i])
 
  }

  update4() {
    this.billList[this.selectitem3].discription =this.positionForm.value.discription;
    this.billList[this.selectitem3].qty =this.positionForm.value.qty;
    this.billList[this.selectitem3].date =this.positionForm.value.date;
    this.billList[this.selectitem3].rate =this.positionForm.value.rate;
   this.billList[this.selectitem3].amount =this.positionForm.value.amount;
    //code to update from localstorage
localStorage.setItem('billList',JSON.stringify(this.billList));
    this.filleverform3 = 'no';
    this.clear()
    Swal.fire({
      title: 'Do you want to do any changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    })
  }


}
