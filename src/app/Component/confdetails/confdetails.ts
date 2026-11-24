import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Conference } from '../../Models/conference';

@Component({
  selector: 'app-confdetails',
  imports: [DatePipe],
  templateUrl: './confdetails.html',
  styleUrl: './confdetails.css',
})
export class Confdetails {
  // parent -> enfant : la conférence sélectionnée
  conference = input<Conference | null>(null);

  // enfant -> parent : demande d'inscription
  registered = output<Conference>();

  remainingPlaces(conf: Conference): number {
    return conf.maxParticipants - conf.nbParticipants;
  }
}