import React, { useState } from 'react';
import { 
  Bell, 
  Mail, 
  Shield, 
  Smartphone,
  Globe,
  Clock,
  Palette,
  Languages,
  Save,
  AlertCircle
} from 'lucide-react';

const SettingsSection = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
    <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
    {children}
  </div>
);

const Toggle = ({ enabled, onChange }) => (
  <button
    onClick={() => onChange(!enabled)}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
      enabled ? 'bg-blue-600' : 'bg-gray-200'
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        enabled ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      desktop: false,
      ticketUpdates: true,
      teamChanges: true,
      systemAlerts: true
    },
    preferences: {
      language: 'en',
      timezone: 'UTC',
      theme: 'light',
      dateFormat: 'MM/DD/YYYY'
    },
    security: {
      twoFactor: false,
      sessionTimeout: '30',
      ipRestriction: false
    }
  });

  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const updateSettings = (category, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
    setUnsavedChanges(true);
  };

  const handleSave = () => {
    // Here you would typically save to your backend
    console.log('Saving settings:', settings);
    setUnsavedChanges(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          {unsavedChanges && (
            <button
              onClick={handleSave}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </button>
          )}
        </div>

        <SettingsSection title="Notifications">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-500 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive email updates about your tickets</p>
                </div>
              </div>
              <Toggle
                enabled={settings.notifications.email}
                onChange={(value) => updateSettings('notifications', 'email', value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Smartphone className="w-5 h-5 text-gray-500 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Push Notifications</p>
                  <p className="text-sm text-gray-500">Get push notifications on your mobile device</p>
                </div>
              </div>
              <Toggle
                enabled={settings.notifications.push}
                onChange={(value) => updateSettings('notifications', 'push', value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bell className="w-5 h-5 text-gray-500 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Desktop Notifications</p>
                  <p className="text-sm text-gray-500">Show desktop notifications</p>
                </div>
              </div>
              <Toggle
                enabled={settings.notifications.desktop}
                onChange={(value) => updateSettings('notifications', 'desktop', value)}
              />
            </div>
          </div>
        </SettingsSection>

        <SettingsSection title="Preferences">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center mb-1">
                    <Languages className="w-4 h-4 mr-2" />
                    Language
                  </div>
                </label>
                <select
                  value={settings.preferences.language}
                  onChange={(e) => updateSettings('preferences', 'language', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center mb-1">
                    <Clock className="w-4 h-4 mr-2" />
                    Time Zone
                  </div>
                </label>
                <select
                  value={settings.preferences.timezone}
                  onChange={(e) => updateSettings('preferences', 'timezone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="UTC">UTC</option>
                  <option value="EST">Eastern Time</option>
                  <option value="PST">Pacific Time</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center mb-1">
                    <Palette className="w-4 h-4 mr-2" />
                    Theme
                  </div>
                </label>
                <select
                  value={settings.preferences.theme}
                  onChange={(e) => updateSettings('preferences', 'theme', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center mb-1">
                    <Globe className="w-4 h-4 mr-2" />
                    Date Format
                  </div>
                </label>
                <select
                  value={settings.preferences.dateFormat}
                  onChange={(e) => updateSettings('preferences', 'dateFormat', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
            </div>
          </div>
        </SettingsSection>

        <SettingsSection title="Security">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-gray-500 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                </div>
              </div>
              <Toggle
                enabled={settings.security.twoFactor}
                onChange={(value) => updateSettings('security', 'twoFactor', value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Session Timeout (minutes)
              </label>
              <select
                value={settings.security.sessionTimeout}
                onChange={(e) => updateSettings('security', 'sessionTimeout', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="120">2 hours</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">IP Restriction</p>
                <p className="text-sm text-gray-500">Limit access to specific IP addresses</p>
              </div>
              <Toggle
                enabled={settings.security.ipRestriction}
                onChange={(value) => updateSettings('security', 'ipRestriction', value)}
              />
            </div>
          </div>
        </SettingsSection>

        {unsavedChanges && (
          <div className="fixed bottom-6 right-6">
            <div className="bg-blue-50 text-blue-800 px-4 py-3 rounded-lg shadow-lg flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              You have unsaved changes
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
