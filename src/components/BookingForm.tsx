import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 800px;
  margin: 3rem auto;
  padding: 2.5rem;
  background-color: #EDEFEE;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  animation: slideUp 0.8s ease-out forwards;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(90deg, #495E57, #F4CE14);
  }
  
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    margin: 1.5rem 1rem;
    padding: 1.8rem 1.5rem;
  }
`

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  transition: all 0.3s ease;
  animation: fadeIn 0.5s ease-out forwards;
  animation-fill-mode: both;
  opacity: 0;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.15s; }
  &:nth-child(3) { animation-delay: 0.2s; }
  &:nth-child(4) { animation-delay: 0.25s; }
  &:nth-child(5) { animation-delay: 0.3s; }
  &:nth-child(6) { animation-delay: 0.35s; }
  &:nth-child(7) { animation-delay: 0.4s; }
  &:nth-child(8) { animation-delay: 0.45s; }
  &:nth-child(9) { animation-delay: 0.5s; }
  &:nth-child(10) { animation-delay: 0.55s; }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  &.full-width {
    grid-column: 1 / -1;
  }

  label {
    font-weight: 500;
    color: #333;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;
    font-size: 1.05rem;
  }

  input, select, textarea {
    padding: 0.9rem 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    background-color: white;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);

    &:focus {
      outline: none;
      border-color: #495E57;
      box-shadow: 0 0 0 3px rgba(73, 94, 87, 0.15);
      transform: translateY(-2px);
    }
    
    &:hover {
      border-color: #bbb;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
  
  &:hover label {
    color: #495E57;
  }
`

const SubmitButton = styled.button`
  background-color: #F4CE14;
  color: #333;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 4px 8px rgba(244, 206, 20, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.4s ease;
    z-index: -1;
  }

  &:hover {
    background-color: #E4BE04;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(244, 206, 20, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 8px rgba(244, 206, 20, 0.3);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`

const ErrorMessage = styled.span`
  color: #e53935;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  animation: fadeIn 0.3s ease-in;
  
  &::before {
    content: '⚠️';
    font-size: 0.8rem;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`

interface BookingFormData {
  date: string;
  time: string;
  guests: number;
  occasion: string;
  seating: string;
  specialRequests: string;
  dietaryRestrictions: string[];
  email: string;
  phone: string;
}

interface FormErrors {
  date?: string;
  time?: string;
  guests?: string;
  email?: string;
  phone?: string;
}

const BookingForm = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    date: '',
    time: '',
    guests: 2,
    occasion: 'birthday',
    seating: 'indoor',
    specialRequests: '',
    dietaryRestrictions: [],
    email: '',
    phone: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.date) {
      newErrors.date = 'Please select a date';
      isValid = false;
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time';
      isValid = false;
    }

    if (formData.guests < 1 || formData.guests > 10) {
      newErrors.guests = 'Number of guests must be between 1 and 10';
      isValid = false;
    }
    
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    if (formData.phone && !/^[\d\s\(\)\-\+]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 1 : value
    }));
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit} noValidate>
        <FormGroup>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]}
            required
            aria-required="true"
            aria-invalid={!!errors.date}
          />
          {errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
            aria-required="true"
            aria-invalid={!!errors.time}
          />
          {errors.time && <ErrorMessage>{errors.time}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            min="1"
            max="10"
            required
            aria-required="true"
            aria-invalid={!!errors.guests}
          />
          {errors.guests && <ErrorMessage>{errors.guests}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleInputChange}
          >
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="business">Business</option>
            <option value="date">Date Night</option>
            <option value="celebration">Celebration</option>
            <option value="other">Other</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label htmlFor="seating">Seating Preference</label>
          <select
            id="seating"
            name="seating"
            value={formData.seating}
            onChange={handleInputChange}
          >
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
            <option value="bar">Bar</option>
            <option value="private">Private Room</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label htmlFor="dietaryRestrictions">Dietary Restrictions</label>
          <select
            id="dietaryRestrictions"
            name="dietaryRestrictions"
            multiple
            value={formData.dietaryRestrictions}
            onChange={(e) => {
              const selected = Array.from(e.target.selectedOptions, option => option.value);
              setFormData(prev => ({ ...prev, dietaryRestrictions: selected }));
            }}
          >
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten-free</option>
            <option value="dairy-free">Dairy-free</option>
            <option value="nut-free">Nut-free</option>
            <option value="shellfish-free">Shellfish-free</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="your@email.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder="(123) 456-7890"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
        </FormGroup>

        <FormGroup className="full-width">
          <label htmlFor="specialRequests">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleInputChange}
            placeholder="Any special requests or notes for your reservation?"
          />
        </FormGroup>

        <FormGroup className="full-width">
          <SubmitButton type="submit">Reserve Table</SubmitButton>
        </FormGroup>
      </Form>
    </FormContainer>
  );
};

export default BookingForm;