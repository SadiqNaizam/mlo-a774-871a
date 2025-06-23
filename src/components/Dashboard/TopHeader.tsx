import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, PlusCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TopHeaderProps {
    className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  return (
    <header className={cn("flex h-16 items-center justify-between border-b bg-card px-6", className)}>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>
                    Create
                    <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>New Lead</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>New Proposal</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>New Invoice</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </header>
  );
};

export default TopHeader;
