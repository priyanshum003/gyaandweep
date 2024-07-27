// src/components/Students.tsx
import { FC, useState } from 'react';
import { FaUserPlus, FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

// Define the interface for Student
interface Student {
  id: number;
  name: string;
  dateJoin: string;
  avatar: string;
}

// Initial list of students
const initialStudents: Student[] = [
  { id: 1, name: 'Ravina Tandon', dateJoin: 'June 1, 2023, 08:22 AM', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: 2, name: 'John Doe', dateJoin: 'May 10, 2023, 09:15 AM', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: 3, name: 'Jane Smith', dateJoin: 'April 22, 2023, 07:45 AM', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
  { id: 4, name: 'Mike Johnson', dateJoin: 'March 15, 2023, 11:30 AM', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { id: 5, name: 'Emily Davis', dateJoin: 'February 28, 2023, 02:20 PM', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' },
];

// Students component
const Students: FC = () => {
  // State for managing the list of students
  const [students, setStudents] = useState<Student[]>(initialStudents);

  // State for managing the sort order (ascending or descending)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Function to sort students by name
  const sortStudents = () => {
    // Create a new array to avoid mutating the original array
    const sortedStudents = [...students].sort((a, b) => {
      // Compare names based on the current sort order
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    // Update the state with the sorted list
    setStudents(sortedStudents);
    // Toggle the sort order
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="p-6">
      {/* Header with title and add student button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Students</h2>
        <div className="flex gap-2">
          <button className="text-gray-600">
            <FaUserPlus size={20} />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200 mb-4"></div>

      {/* Table to display the list of students */}
      <table className="w-full">
        <thead>
          <tr className="text-left">
            {/* Table headers with sort button for names */}
            <th className="py-2 flex items-center">
              Name

            </th>
            <th className="py-2">Date Joined</th>
            <th className="py-2 text-right">
              <button className="ml-2 text-gray-600" onClick={sortStudents}>
                {sortOrder === 'asc' ? <FaSortAlphaDown size={16} /> : <FaSortAlphaUp size={16} />}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Render rows for each student */}
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50">
              <td className="py-2 flex items-center">
                <img src={student.avatar} alt={student.name} className="w-8 h-8 rounded-full mr-2" />
                {student.name}
              </td>
              <td className="py-2">{student.dateJoin}</td>
              <td className="py-2 text-right">
                <button className="text-gray-600">
                  <BsThreeDotsVertical size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;