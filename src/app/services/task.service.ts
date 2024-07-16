import { Injectable } from "@angular/core";
import { Task } from "../models/task";


@Injectable({
    providedIn: 'root'
})

export class TaskService {
    private tasks: Task[] = [
        new Task("Faire API", "Implémenter une API pour les gestions des compétences APC avec Symfony", new Date('2024-09-01')).withPicture('/assets/tilePictures/api.png'),
        new Task("Manger un burger", "coder c'est bien mais il faut reprendre des forces!", new Date('2024-07-18')).withPicture('/assets/tilePictures/burger.png'),
        new Task("Apprendre Angular", "Pour implémenter une interface stagiaire de la gestion des compétences APC", new Date('2024-08-15'))
    ]

    getTasks() {
        return [...this.tasks];
    }

    
}