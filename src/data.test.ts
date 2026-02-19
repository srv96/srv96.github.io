import { describe, it, expect } from 'vitest';
import { experienceData, portfolioData } from './data';

describe('Data Integrity', () => {
    describe('Experience Data', () => {
        it('should have valid experience entries', () => {
            expect(experienceData.length).toBeGreaterThan(0);
            experienceData.forEach((item) => {
                expect(item.period).toBeTruthy();
                expect(item.role).toBeTruthy();
                expect(item.company).toBeTruthy();
                expect(item.description).toBeTruthy();
                expect(['left', 'right']).toContain(item.position);
            });
        });

        it('should alternate positions or be explicitly set', () => {
            // Logic check: ensure position is always left or right
            experienceData.forEach((item) => {
                expect(item.position).toMatch(/^(left|right)$/);
            });
        });
    });

    describe('Portfolio Data', () => {
        it('should have valid portfolio entries', () => {
            expect(portfolioData.length).toBeGreaterThan(0);
            portfolioData.forEach((item) => {
                expect(item.filter).toBeTruthy();
                expect(item.link).toBeTruthy();
                expect(item.img).toBeTruthy();
                expect(item.title).toBeTruthy();
            });
        });

        it('should have valid filter classes', () => {
            const validFilters = ['filter-1', 'filter-2', 'filter-3'];
            portfolioData.forEach((item) => {
                expect(validFilters).toContain(item.filter);
            });
        });
    });
});
