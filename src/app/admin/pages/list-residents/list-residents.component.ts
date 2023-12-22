import { Component, OnInit } from '@angular/core';
import { Resident } from '../../Interfaces/resident.interface';
import { ResidentsService } from '../../services/residents.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-list-residents',
  templateUrl: './list-residents.component.html',
  styleUrls: ['./list-residents.component.css']
})
export class ListResidentsComponent implements OnInit {
  residents: Resident[]=[];
  constructor(private residentService: ResidentsService,
              private dialog: MatDialog) { }


  
              // get currentResident(): Resident{
              //   const resident = this.residentForm.value as Resident;
              //   return resident;
              // }

  ngOnInit(): void {
    this.residentService.getResidents().subscribe(residents=> this.residents= residents)
  }

  onDeleteResident(){
    // if(!this.residentService) throw Error('Ocurrio un error inesperado o el elemento ya fue borrado');
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;

      this.residentService.deleteResidentById(5)
      .subscribe(
        wasDeleted=>{
          if(wasDeleted){
            console.log('Eliminado')
          }
        }
      );
    });
  }

}
