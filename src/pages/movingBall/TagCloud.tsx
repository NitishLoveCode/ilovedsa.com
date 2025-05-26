import React from 'react';
import './TagCloud.css'; // Or use styled-components if you prefer

const tags = [
  { name: 'Arrays', url: '#' },
  { name: 'Linked Lists', url: '#' },
  { name: 'Stacks', url: '#' },
  { name: 'Queues', url: '#' },
  { name: 'Hash Tables', url: '#' },
  { name: 'Trees', url: '#' },
  { name: 'Binary Search Trees', url: '#' },
  { name: 'Heaps', url: '#' },
  { name: 'Graphs', url: '#' },
  { name: 'Tries', url: '#' },
  { name: 'Recursion', url: '#' },
  { name: 'Dynamic Programming', url: '#' },
  { name: 'Greedy Algorithms', url: '#' },
  { name: 'Divide and Conquer', url: '#' },
  { name: 'Backtracking', url: '#' },
  { name: 'Bit Manipulation', url: '#' },
  { name: 'Sliding Window', url: '#' },
  { name: 'Two Pointers', url: '#' },
  { name: 'Topological Sort', url: '#' },
  { name: 'Union Find', url: '#' },
  { name: 'Segment Trees', url: '#' },
  { name: 'Fenwick Tree', url: '#' },
  { name: 'KMP Algorithm', url: '#' },
  { name: 'Rabin-Karp', url: '#' },
  { name: 'Dijkstra’s Algorithm', url: '#' },
  { name: 'Bellman-Ford', url: '#' },
  { name: 'Floyd-Warshall', url: '#' },
  { name: 'Prim’s Algorithm', url: '#' },
  { name: 'Kruskal’s Algorithm', url: '#' },
  { name: 'Binary Search', url: '#' },
  { name: 'Depth First Search (DFS)', url: '#' },
  { name: 'Breadth First Search (BFS)', url: '#' }
];
  

const TagCloud: React.FC = () => {
  return (
    <div className="tagcloud-wrapper">
      <ul className="tagcloud" style={{ ['--num-elements' as any]: tags.length }}>
        {tags.map((tag, index) => (
          <li
            className="tagcloud-tag"
            key={index}
            style={{ ['--index' as any]: index + 1 }}
          >
            <a href={tag.url} target="_blank" rel="noopener noreferrer">
              {tag.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagCloud;
