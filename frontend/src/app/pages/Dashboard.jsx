import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import UploadVerifyPage from './UploadVerifyPage';
import ReportsPage from './ReportsPage';
import AnalyticsPage from './AnalyticsPage';
import SettingsPage from './SettingsPage';

export default function Dashboard({ onLogout }) {
  const [activePage, setActivePage] = useState('upload');
  const [uploadedMedia, setUploadedMedia] = useState([]);

  const renderActivePage = () => {
    switch (activePage) {
      case 'dashboard':
        return <UploadVerifyPage uploadedMedia={uploadedMedia} setUploadedMedia={setUploadedMedia} />;
      case 'upload':
        return <UploadVerifyPage uploadedMedia={uploadedMedia} setUploadedMedia={setUploadedMedia} />;
      case 'reports':
        return <ReportsPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <UploadVerifyPage uploadedMedia={uploadedMedia} setUploadedMedia={setUploadedMedia} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-950">
      <Sidebar activePage={activePage} setActivePage={setActivePage} onLogout={onLogout} />
      <main className="flex-1 overflow-auto">
        {renderActivePage()}
      </main>
    </div>
  );
}
