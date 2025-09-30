'use client';

import { useState, useEffect } from 'react';
import { User, PlusCircle, Edit, Trash2, LogOut, Home as HomeIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('user'); // 'user', 'admin', 'super_admin'
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      setIsLoggedIn(true);
      // In a real app, decode token to get user role
      setUserRole('super_admin'); // Mocking super_admin for demo
      fetchUsers(token);
    } else {
      router.push('/'); // Redirect to home if not logged in
      toast.error('Please log in as an admin to access this page.');
    }
  }, [router]);

  const fetchUsers = async (token: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/admin/users', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (err: any) {
      setError(err.message);
      toast.error(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('user');
    localStorage.removeItem('jwt_token');
    toast.success('Logged out!');
    router.push('/');
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-xl text-gray-700">Loading users...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-xl text-red-600">Error: {error}</div>;
  if (!isLoggedIn || userRole !== 'super_admin') return null; // Should redirect by router.push

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <User className="h-8 w-8 text-orange-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="/" className="flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200">
                <HomeIcon className="h-5 w-5 mr-1" /> Home
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors duration-200"
              >
                <LogOut className="h-5 w-5 mr-2" /> Logout
              </motion.button>
            </nav>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-12"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">User Management</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-5 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200"
            >
              <PlusCircle className="h-5 w-5 mr-2" /> Add New User
            </motion.button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  <th className="px-6 py-3 border-b-2 border-gray-200">ID</th>
                  <th className="px-6 py-3 border-b-2 border-gray-200">Username</th>
                  <th className="px-6 py-3 border-b-2 border-gray-200">Email</th>
                  <th className="px-6 py-3 border-b-2 border-gray-200">Role</th>
                  <th className="px-6 py-3 border-b-2 border-gray-200">Created At</th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.map((user) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.username}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{new Date(user.created_at).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-orange-600 hover:text-orange-900 mr-3"
                      >
                        <Edit className="h-5 w-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-5 w-5" />
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
    </div>
  );
}