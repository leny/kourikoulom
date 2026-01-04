/**
 * Date formatting utilities using Luxon
 */

import { DateTime } from "luxon";

/**
 * Format a date string from yyyy-MM-dd to French month year
 * @param {string} date - Date string in yyyy-MM-dd format
 * @returns {string} Formatted date string
 */
export function formatExperienceDate(date) {
    return DateTime.fromFormat(date, "yyyy-MM-dd", { locale: "fr" }).toFormat(
        "LLLL yyyy",
    );
}

/**
 * Format a date string for formations
 * @param {string} date - Date string
 * @param {string} [format="yyyy-MM"] - Input format
 * @param {string} [out="LLL yyyy"] - Output format
 * @returns {string} Formatted date string
 */
export function formatFormationDate(date, format = "yyyy-MM", out = "LLL yyyy") {
    return DateTime.fromFormat(date, format, { locale: "fr" }).toFormat(out);
}
