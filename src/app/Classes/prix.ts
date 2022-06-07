import { Modules } from "./modules";
import { PeriodePayement } from "./periode-payement";

export class Prix {
    idPrix : number ; 
    dateEffet : Date ;
    dateFin : Date
    prix : number ;
    module : Modules ;
    periodepayement : PeriodePayement ; 
    
    
}
