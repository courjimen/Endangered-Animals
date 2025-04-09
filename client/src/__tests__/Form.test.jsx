import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Form from '../components/Form.jsx'

describe('form', () => { 
    it('renders the form', () => {
       render(
       <Form 
       newSighting={{}}
       individuals={[]}
       handleInputChange={() => {}}
       />
    )

        const intakeForm = screen.getByRole('form')
        expect(intakeForm).toBeInTheDocument()
    })
 })