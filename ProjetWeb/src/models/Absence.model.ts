import {DateTime} from "./DateTime.model"

export class Absence{
    idAbsence : number;
    matriculeEmp : string;
    motifAbsence : string;
    dateDebAbsence : DateTime;
    dateFinAbsence : DateTime;
}