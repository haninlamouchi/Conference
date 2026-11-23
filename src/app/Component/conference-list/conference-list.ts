import { Component } from '@angular/core';
import { NgClass, DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../Models/conference';

@Component({
  selector: 'app-conference-list',
  imports: [NgClass, DatePipe, UpperCasePipe, FormsModule],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  searchText: string = '';

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Signals, control flow natif et composants standalone.',
      date: new Date('2027-11-15'),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75, // 25 places restantes -> vert
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur les signals.',
      date: new Date('2027-11-30'),
      place: 'Ariana',
      maxParticipants: 50,
      nbParticipants: 44,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Les nouveautés du développement web.',
      date: new Date('2027-11-20'),
      place: 'Sousse',
      maxParticipants: 80,
      nbParticipants: 80, 
    },
    {
      id: 4,
      title: 'TypeScript Day',
      description: 'Conférence passée : ne doit pas apparaître.',
      date: new Date('2026-03-10'),
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: 30,
    },
  ];

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
}