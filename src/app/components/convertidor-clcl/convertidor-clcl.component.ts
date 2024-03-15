import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clcl-app-convertidor-clcl',
  templateUrl: './convertidor-clcl.component.html',
  styleUrls: ['./convertidor-clcl.component.css']
})
export class ConvertidorClclComponent implements OnInit {
  cantidad=0;
  tengo='USD';
  quiero='LIBRAS';
  total = 0;

  monedas: string[]=['USD', 'EUR', 'LIBRAS', 'COP', 'WON', 'YEN', 'THB', 'INR', 'MXN', 'BRL' ]
  constructor() { }

  ngOnInit(): void {
  }
  convertir(): void{
    //console.log('llama al metodo convertir..')
    switch(this.tengo){
      case'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        }
        
        if(this.quiero === 'EUR'){
        this.total = this.cantidad *0.91;
        }
      
        if(this.quiero === 'LIBRAS'){
        this.total = this.cantidad * 0.78;
        }

        if (this.quiero === 'COP'){
          this.total = this.cantidad *3,891.80;
        }

        if (this.quiero === 'WON'){
          this.total = this.cantidad *1,332.58;
        }

        if (this.quiero === 'YEN'){
          this.total = this.cantidad *149.05;
        }

        if (this.quiero === 'THB'){
          this.total = this.cantidad *35.90;
        }
        if (this.quiero === 'INR'){
          this.total = this.cantidad *82.90;
        }
        if (this.quiero === 'MXN'){
          this.total = this.cantidad *16.71;
        }
        if (this.quiero === 'BRL'){
          this.total = this.cantidad *4.99;
        }
        break;

      case'EUR':
        if(this.quiero === 'USD'){
          this.total = this.cantidad *1.09;
        }
        
        if(this.quiero === 'EUR'){
        this.total = this.cantidad;
        }
      
        if(this.quiero === 'LIBRAS'){
        this.total = this.cantidad * 0.85;
        }

        if (this.quiero === 'COP'){
          this.total = this.cantidad *4,236.83;
        }

        if (this.quiero === 'WON'){
          this.total = this.cantidad *1,450.37;
        }

        if (this.quiero === 'YEN'){
          this.total = this.cantidad *162.22;
        }

        if (this.quiero === 'THB'){
          this.total = this.cantidad *39.08;
        }
        if (this.quiero === 'INR'){
          this.total = this.cantidad *90.24;
        }
        if (this.quiero === 'MXN'){
          this.total = this.cantidad *18.19;
        }
        if (this.quiero === 'BRL'){
          this.total = this.cantidad *5.44;
        }
        break;
        
      case'LIBRAS':
        if(this.quiero === 'USD'){
          this.total = this.cantidad *1.28;
        }
        
        if(this.quiero === 'EUR'){
        this.total = this.cantidad *1.17;
        }
      
        if(this.quiero === 'LIBRAS'){
        this.total = this.cantidad;
        }

        if (this.quiero === 'COP'){
          this.total = this.cantidad *4,954.57;
        }

        if (this.quiero === 'WON'){
          this.total = this.cantidad *1,695.87;
        }

        if (this.quiero === 'YEN'){
          this.total = this.cantidad *189.67;
        }

        if (this.quiero === 'THB'){
          this.total = this.cantidad *45.71;
        }
        if (this.quiero === 'INR'){
          this.total = this.cantidad *105.53;
        }
        if (this.quiero === 'MXN'){
          this.total = this.cantidad *21.28 ;
        }
        if (this.quiero === 'BRL'){
          this.total = this.cantidad *6.36;
        }
        break;

        case'COP':
        if(this.quiero === 'USD'){
          this.total = this.cantidad *0.00026;
        }
        
        if(this.quiero === 'EUR'){
        this.total = this.cantidad *0.00024;
        }
      
        if(this.quiero === 'LIBRAS'){
        this.total = this.cantidad *0.00020;
        }

        if (this.quiero === 'COP'){
          this.total = this.cantidad;
        }
        if (this.quiero === 'WON'){
          this.total = this.cantidad *0.34;
        }

        if (this.quiero === 'YEN'){
          this.total = this.cantidad *0.038;
        }
        if (this.quiero === 'THB'){
          this.total = this.cantidad *0.0092;
        }
        if (this.quiero === 'INR'){
          this.total = this.cantidad *0.021;
        }
        if (this.quiero === 'MXN'){
          this.total = this.cantidad *0.0043;
        }
        if (this.quiero === 'BRL'){
          this.total = this.cantidad *0.0013 ;
        }
        break;

        case'WON':
        if(this.quiero === 'USD'){
          this.total = this.cantidad *0.00075;
        }
        
        if(this.quiero === 'EUR'){
        this.total = this.cantidad *0.00069;
        }
      
        if(this.quiero === 'LIBRAS'){
        this.total = this.cantidad *0.00059;
        }

        if (this.quiero === 'COP'){
          this.total = this.cantidad *2.92;
        }

        if (this.quiero === 'WON'){
          this.total = this.cantidad;
        }

        if (this.quiero === 'YEN'){
          this.total = this.cantidad *0.11;
        }
        if (this.quiero === 'THB'){
          this.total = this.cantidad *0.027;
        }
        if (this.quiero === 'INR'){
          this.total = this.cantidad *0.062;
        }
        if (this.quiero === 'MXN'){
          this.total = this.cantidad *0.013;
        }
        if (this.quiero === 'BRL'){
          this.total = this.cantidad *0.0038 ;
        }
        break;

        case'YEN':
        if(this.quiero === 'USD'){
          this.total = this.cantidad *0.0067;
        }
        
        if(this.quiero === 'EUR'){
        this.total = this.cantidad *0.0062;
        }
      
        if(this.quiero === 'LIBRAS'){
        this.total = this.cantidad *0.0053;
        }

        if (this.quiero === 'COP'){
          this.total = this.cantidad *26.06;
        }

        if (this.quiero === 'WON'){
          this.total = this.cantidad *8.94;
        }

        if (this.quiero === 'YEN'){
          this.total = this.cantidad;
        }
        if (this.quiero === 'THB'){
          this.total = this.cantidad *0.24;
        }
        if (this.quiero === 'INR'){
          this.total = this.cantidad *0.56;
        }
        if (this.quiero === 'MXN'){
          this.total = this.cantidad *0.11;
        }
        if (this.quiero === 'BRL'){
          this.total = this.cantidad *0.034;
        }
        break;
      
      case'THB':
        if(this.quiero === 'USD'){
          this.total = this.cantidad *0.028;
        }
        
        if(this.quiero === 'EUR'){
        this.total = this.cantidad *0.026;
        }
      
        if(this.quiero === 'LIBRAS'){
        this.total = this.cantidad *0.022;
        }

        if (this.quiero === 'COP'){
          this.total = this.cantidad *108.15;
        }

        if (this.quiero === 'WON'){
          this.total = this.cantidad *37.12;
        }

        if (this.quiero === 'YEN'){
          this.total = this.cantidad *4.15;
        }
        if (this.quiero === 'THB'){
          this.total = this.cantidad;
        }
        if (this.quiero === 'INR'){
          this.total = this.cantidad *2.31;
        }
        if (this.quiero === 'MXN'){
          this.total = this.cantidad *0.47;
        }
        if (this.quiero === 'BRL'){
          this.total = this.cantidad *0.034;
        }
        break;

        case'INR':
        if(this.quiero === 'USD'){
          this.total = this.cantidad *0.012;
        }
        
        if(this.quiero === 'EUR'){
        this.total = this.cantidad *0.011;
        }
      
        if(this.quiero === 'LIBRAS'){
        this.total = this.cantidad *0.0095;
        }

        if (this.quiero === 'COP'){
          this.total = this.cantidad *46.82;
        }

        if (this.quiero === 'WON'){
          this.total = this.cantidad *16.07;
        }

        if (this.quiero === 'YEN'){
          this.total = this.cantidad *1.80;
        }
        if (this.quiero === 'THB'){
          this.total = this.cantidad *0.43;
        }
        if (this.quiero === 'INR'){
          this.total = this.cantidad;
        }
        if (this.quiero === 'MXN'){
          this.total = this.cantidad *0.20;
        }
        if (this.quiero === 'BRL'){
          this.total = this.cantidad *0.060;
        }
        break;

        case'MXN':
        if(this.quiero === 'USD'){
          this.total = this.cantidad *0.060;
        }
        
        if(this.quiero === 'EUR'){
        this.total = this.cantidad *0.055;
        }
      
        if(this.quiero === 'LIBRAS'){
        this.total = this.cantidad *0.047;
        }

        if (this.quiero === 'COP'){
          this.total = this.cantidad *232.23;
        }

        if (this.quiero === 'WON'){
          this.total = this.cantidad *79.73;
        }

        if (this.quiero === 'YEN'){
          this.total = this.cantidad *8.92;
        }
        if (this.quiero === 'THB'){
          this.total = this.cantidad *2.15;
        }
        if (this.quiero === 'INR'){
          this.total = this.cantidad *4.96;
        }
        if (this.quiero === 'MXN'){
          this.total = this.cantidad;
        }
        if (this.quiero === 'BRL'){
          this.total = this.cantidad *0.30;
        }
        break;
        case'BRL':
        if(this.quiero === 'USD'){
          this.total = this.cantidad *0.20;
        }
        
        if(this.quiero === 'EUR'){
        this.total = this.cantidad *0.18;
        }
      
        if(this.quiero === 'LIBRAS'){
        this.total = this.cantidad *0.16;
        }

        if (this.quiero === 'COP'){
          this.total = this.cantidad *777.37;
        }

        if (this.quiero === 'WON'){
          this.total = this.cantidad *266.57;
        }

        if (this.quiero === 'YEN'){
          this.total = this.cantidad *29.84;
        }
        if (this.quiero === 'THB'){
          this.total = this.cantidad *7.19;
        }
        if (this.quiero === 'INR'){
          this.total = this.cantidad *16.60;
        }
        if (this.quiero === 'MXN'){
          this.total = this.cantidad *3.34;
        }
        if (this.quiero === 'BRL'){
          this.total = this.cantidad;
        }
        break;
    }
  }
}
