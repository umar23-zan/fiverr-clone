import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import GigCard from './GigCard';
import Header from './Header';

const SearchResults = () => {
  const location = useLocation();
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Extract category from query params
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');

  useEffect(() => {
    if (category) {
      fetchGigsByCategory();
    }
  }, [category]);

  const fetchGigsByCategory = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`/api/gigs/category?category=${encodeURIComponent(category)}`);
      setGigs(response.data);
    } catch (error) {
      console.error('Error fetching gigs:', error);
      setError('Failed to fetch gigs. Please try again later.');
    }finally {
      setLoading(false);
    }
  };

  if (!category) {
    return <p>No category selected.</p>;
  }

  return (
    <div>
      <Header />
      <h1>Search Results for "{category}"</h1>
      <div className="gig-container">
        {gigs.length > 0 ? (
          gigs.map((gig) => <GigCard key={gig._id} gig={gig} />)
        ) : (
          <p>No gigs found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
