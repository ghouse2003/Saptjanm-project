import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Home } from '@/pages/home';
import { SignIn } from '@/pages/auth/signin';
import { SignUp } from '@/pages/auth/signup';
import { CreateProfile } from '@/pages/profile/create';
import { Dashboard } from '@/pages/dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/create-profile" element={<CreateProfile />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;