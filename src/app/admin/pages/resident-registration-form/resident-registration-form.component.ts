import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ResidentsService } from '../../services/residents.service';
import { Resident } from '../../Interfaces/resident.interface';
import {MatSnackBar} from '@angular/material/snack-bar';
// import { MatDialog } from '@angular/material/dialog';
// import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-resident-registration-form',
  templateUrl: './resident-registration-form.component.html',
  styleUrls: ['./resident-registration-form.component.css']
})
export class ResidentRegistrationFormComponent implements OnInit{

  // public residentForm: FormGroup = new FormGroup({
  //   name: new FormControl('',[],[]),
  //   lastname: new FormControl(''),
  //   email: new FormControl('',[],[]),
  // })

  public residentForm:FormGroup = this.fb.group({
    id:[0],
    name:['',[Validators.required, Validators.minLength(3)]],
    lastname:['',[Validators.required]],
    phone: [0],
    address: ['',[Validators.required]],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required]]
  }) 

  constructor( private fb: FormBuilder,
               private residentService: ResidentsService,
               private activateRoute: ActivatedRoute,
               private router:Router,
               private snackBar: MatSnackBar,
               ) { }

  get currentResident(): Resident{
    const resident = this.residentForm.value as Resident;
    return resident;
  }
  
  ngOnInit(): void {
    // if(!this.router.url.includes('edit')) return;
    
    // this.activateRoute.params
    // .pipe(
    //   switchMap(({id})=> this.residentService.getResidentById(id)),
    //   ).subscribe(resident=>{
    //     if(!resident) return this.router.navigateByUrl('/');
    //     this.residentForm.reset(resident);
    //     return
    //   })
  }

  isValidField(field: string): boolean | null{
    return this.residentForm.controls[field].errors && this.residentForm.controls[field].touched;
  }

  getFieldError(field: string):string | null{
    if( !this.residentForm.controls[field]) return null;

    const errors = this.residentForm.controls[field].errors || {};

    for(const key of Object.keys(errors)){
      switch(key){
        case 'required':
          return 'El dato es requerido';

        case 'minlength':
          return 'La longitud es inusual'

        case 'email':
          return 'Correo invalido'
      }
    }

    return ''
  }

  onSave():void{
    if(this.residentForm.invalid){ 
      this.residentForm.markAllAsTouched();
      return};

      if(this.currentResident.id){
        this.residentService.updateResident(this.currentResident)
          .subscribe(resident=>{
            this.showSnackBar(`${resident.name} Actualizado!`)
          });
          return
      }

      this.residentService.postResident(this.currentResident)
        .subscribe(resident=>{
          this.router.navigate(['/admin/resident']);
          this.showSnackBar(`${resident.name} Creado!`);
        })
     // this.residentService.postResident(this.residentForm.value);
    // console.log(this.residentForm.value);
    this.residentForm.reset();//{price:0}dentro el reset cuando son numeros
  }

  // onDeleteResident(){
  //   if(!this.currentResident.id) throw Error('Ocurrio un error inesperado o el elemento ya fue borrado');
  //   const dialogRef = this.dialog.open(ConfirmDialogComponent, {
  //     data: this.residentForm.value,
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log({result})
  //     // this.animal = result;
  //   });
  // }

  

  showSnackBar(message: string):void{
    this.snackBar.open(message,'ok', {
      duration: 2500
    })
  }



}
