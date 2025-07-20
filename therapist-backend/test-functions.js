// Test script for Vercel serverless functions
// Run with: node test-functions.js

const testFunctions = async () => {
  const baseUrl = process.env.TEST_URL || 'http://localhost:3000';
  
  console.log('🧪 Testing Serverless Functions...\n');

  // Test 1: Health Check
  try {
    console.log('1️⃣ Testing Health Check (GET /)');
    const response = await fetch(`${baseUrl}/`);
    const data = await response.json();
    console.log('✅ Health Check:', data);
  } catch (error) {
    console.log('❌ Health Check Failed:', error.message);
  }

  // Test 2: Contact Form
  try {
    console.log('\n2️⃣ Testing Contact Form (POST /api/contact)');
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        phone: '123-456-7890',
        childAge: '5',
        message: 'This is a test message'
      })
    });
    const data = await response.json();
    console.log('✅ Contact Form:', data);
  } catch (error) {
    console.log('❌ Contact Form Failed:', error.message);
  }

  // Test 3: Consultation Booking
  try {
    console.log('\n3️⃣ Testing Consultation Booking (POST /api/consultation)');
    const response = await fetch(`${baseUrl}/api/consultation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        childName: 'Test Child',
        age: 6,
        parentPhone: '987-654-3210'
      })
    });
    const data = await response.json();
    console.log('✅ Consultation Booking:', data);
  } catch (error) {
    console.log('❌ Consultation Booking Failed:', error.message);
  }

  console.log('\n✨ Testing Complete!');
};

// Run tests
testFunctions();
