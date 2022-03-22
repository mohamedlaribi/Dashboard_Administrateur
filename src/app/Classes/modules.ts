export class Modules {
    idmodule : number;
    nom : string; 
    date_creation : Date; 
    prix_mensuel : number ;
    prix_trimestriel : number ;
    prix_annuel : number ; 
    prix_semestriel : number ;
    prix_forfaitaire : number ; 
    parentModule: Modules ; 


    constructor()
    {
        this.idmodule = null;
        this.nom = null ;
        this.date_creation= null ;
        this.prix_mensuel = null ; 
        this.prix_trimestriel= null ; 
        this.prix_semestriel = null ; 
        this.prix_forfaitaire= null ; 
        this.prix_annuel=null; 
        this.parentModule = null ;

    }
}
