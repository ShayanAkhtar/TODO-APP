import React from 'react';

const CategoryFilter = ({ currentCategory, onFilterChange }) => {
  const categories = ['All', 'General', 'Work', 'Personal', 'Urgent'];

  return (
    <div className="category-filter">
      <h2>Filter by Category</h2>
      <select
        value={currentCategory}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
