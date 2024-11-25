// src/types/Activity.ts

export type ActivityType = 'Lesson View' | 'Quiz Taken';

export interface Activity {
    id: number;
    type: ActivityType;
    title: string;
    timestamp: string; // ISO string format
}
