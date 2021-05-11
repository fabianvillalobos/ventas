import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DialogDeleteComponent } from "src/app/common/delete/dialogDelete.component";
import { Concepto } from "src/app/Models/Concepto";
import { Venta } from "src/app/Models/Venta";
import { ApiVentaService } from "src/app/services/api-venta.service";

@Component({
    templateUrl: 'dialogVenta.component.html'
})
export class DialogVentaComponent{
    public venta: Venta;
    public conceptos: Concepto[];

    public conceptoForm = this.formBuilder.group({
        cantidad: [0, Validators.required],
        importe: [0, Validators.required],
        idProducto: [1, Validators.required]
    });
    
    constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>, 
        public snackbar: MatSnackBar, private formBuilder: FormBuilder,
        public apiVentaService: ApiVentaService)
        {
            this.conceptos = [];
            this.venta = {idCliente: 3, conceptos: []};
    }

    close(){
        this.dialogRef.close();
    }

    addConcepto(){
        this.conceptos.push(this.conceptoForm.value);
    }

    addVenta(){
        this.venta.conceptos = this.conceptos;
        this.apiVentaService.add(this.venta).subscribe(response => {
                this.dialogRef.close();
                this.snackbar.open('Venta realizada con éxito', '',{
                    duration: 2000
                });
        });
    }
}