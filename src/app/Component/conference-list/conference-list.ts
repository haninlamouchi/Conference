import { Component } from '@angular/core';
import { NgClass, DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../Models/conference';
import { Confdetails } from '../confdetails/confdetails';

@Component({
  selector: 'app-conference-list',
  imports: [NgClass, DatePipe, UpperCasePipe, FormsModule, Confdetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  searchText: string = '';
  selectedConference: Conference | null = null;

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Signals, control flow natif et composants standalone.',
      date: new Date('2027-11-15T09:00:00'),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75, // 25 places restantes -> vert
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur les signals.',
      date: new Date('2027-11-30T14:00:00'),
      place: 'Ariana',
      maxParticipants: 50,
      nbParticipants: 44, // 6 places restantes -> orange
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Les nouveautés du développement web.',
      date: new Date('2027-11-20T10:00:00'),
      place: 'Sousse',
      maxParticipants: 80,
      nbParticipants: 80, // complet -> rouge
    },
    {
      id: 4,
      title: 'TypeScript Day',
      description: 'Conférence passée : ne doit pas apparaître.',
      date: new Date('2026-03-10T09:00:00'),
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: 30, // passée -> filtrée
    },
  ];

  // conférences à venir, filtrées par le titre saisi
  get filteredConferences(): Conference[] {
    const now = new Date();
    const search = this.searchText.trim().toLowerCase();

    return this.conferences.filter(
      (c) => c.date > now && c.title.toLowerCase().includes(search)
    );
  }

  remainingPlaces(conf: Conference): number {
    return conf.maxParticipants - conf.nbParticipants;
  }

  register(conf: Conference) {
    if (this.remainingPlaces(conf) > 0) {
      conf.nbParticipants++;
    }
  }

  // Prosit 2 : sélection envoyée au composant enfant
  select(conf: Conference) {
    this.selectedConference = conf;
  }

  closeDetails() {
    this.selectedConference = null;
  }
}