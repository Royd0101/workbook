// src/utils/activityStorage.ts
import { Activity } from "../types/activity";

const ACTIVITY_STORAGE_KEY = 'userActivities';

// Retrieve activities from localStorage
export const getActivities = (): Activity[] => {
    const activities = localStorage.getItem(ACTIVITY_STORAGE_KEY);
    return activities ? JSON.parse(activities) : [];
};

// Add a new activity to localStorage
export const addActivity = (activity: Activity, maxEntries: number = 50): void => {
    const activities = getActivities();
    activities.push(activity);

    // Keep only the latest `maxEntries` activities
    if (activities.length > maxEntries) {
        activities.shift(); // Remove the oldest activity
    }

    localStorage.setItem(ACTIVITY_STORAGE_KEY, JSON.stringify(activities));
};

// Clear all activities (optional)
export const clearActivities = (): void => {
    localStorage.removeItem(ACTIVITY_STORAGE_KEY);
};
