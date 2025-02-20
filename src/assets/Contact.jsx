import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Contact() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);

      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">#</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Username</th>
              <th className="py-2 px-4 border">Email</th>
            </tr>
          </thead>
          
          <tbody>
            {users.map((item) => (
              <tr key={item.id} className="text-center border-t">
                <td className="py-2 px-4 border">{item.id}</td>
                <td className="py-2 px-4 border">{item.name}</td>
                <td className="py-2 px-4 border">{item.username}</td>
                <td className="py-2 px-4 border">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contact;
