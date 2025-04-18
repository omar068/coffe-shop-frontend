import { render, screen } from '@testing-library/react';
import Alert from '../Alert'; 
import '@testing-library/jest-dom'; 
import React from 'react';

describe('Alert component', () => {
    test('renders the alert correctly', () => {
        render(<Alert />);

        const alertIcon = screen.getByAltText("Alert log");
        expect(alertIcon).toBeInTheDocument();  

        const title = screen.getByText('Happy Hour');
        expect(title).toBeInTheDocument();  

        const time = screen.getByText('15:00 - 17:00 hrs MEX');
        expect(time).toBeInTheDocument();  
    });
});