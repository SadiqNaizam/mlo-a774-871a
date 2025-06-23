import React from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutGrid, 
  Users, 
  User, 
  FileText, 
  FileStack, 
  ShoppingBag, 
  Mail, 
  Archive, 
  Calendar, 
  HelpCircle, 
  Settings,
  Box
} from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
}

const mainNavItems: NavItem[] = [
  { href: '#', label: 'Dashboard', icon: LayoutGrid, active: true },
  { href: '#', label: 'Leads', icon: Users },
  { href: '#', label: 'Customers', icon: User },
  { href: '#', label: 'Proposals', icon: FileText },
  { href: '#', label: 'Invoices', icon: FileStack },
  { href: '#', label: 'Items', icon: ShoppingBag },
  { href: '#', label: 'Mail', icon: Mail },
  { href: '#', label: 'Shoebox', icon: Archive },
  { href: '#', label: 'Calendar', icon: Calendar },
];

const secondaryNavItems: NavItem[] = [
  { href: '#', label: 'Help', icon: HelpCircle },
  { href: '#', label: 'Settings', icon: Settings },
];

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-64 flex flex-col h-full bg-card border-r fixed">
      <div className="h-16 flex items-center px-6 border-b">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <Box className="h-8 w-8 p-1.5 bg-foreground text-background rounded-full" />
        </a>
      </div>
      <nav className="flex-1 flex flex-col justify-between py-4">
        <div>
          <ul className="space-y-1 px-4">
            {mainNavItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary',
                    item.active && 'bg-secondary text-primary'
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
            <ul className="space-y-1 px-4">
                {secondaryNavItems.map((item) => (
                <li key={item.label}>
                    <a
                    href={item.href}
                    className={cn(
                        'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary',
                        item.active && 'bg-secondary text-foreground'
                    )}
                    >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                    </a>
                </li>
                ))}
            </ul>
        </div>
      </nav>
    </aside>
  );
};

export default SidebarNav;
