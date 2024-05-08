import './FilterBar.css';

export default function FilterBar({ onFilter }) {
    return (
        <input
            className="filter-bar-input"
            type="text"
            placeholder="Αναζήτηση..."
            onChange={e => onFilter(e.target.value)}
        />
    );
}

