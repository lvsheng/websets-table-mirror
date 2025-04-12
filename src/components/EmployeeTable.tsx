
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Filter, LayoutGrid, LayoutList, SortAsc } from "lucide-react";
import UserAvatar from "./UserAvatar";
import MatchLabel from "./MatchLabel";

interface Employee {
  id: number;
  name: string;
  position: string;
  url: string;
  pastProfessionalRole: boolean;
  currentRole: boolean;
  employmentAtA: boolean;
  experienceSummary: string;
  currentCompany: string;
  experienceX: string;
}

const employeesData: Employee[] = [
  {
    id: 1,
    name: "Dhanuja Kumar",
    position: "Business Operations Manager | Helping companies scale",
    url: "in.linkedin.com/in/dhanuja-kumar",
    pastProfessionalRole: true,
    currentRole: true,
    employmentAtA: true,
    experienceSummary: "Experience Summary",
    currentCompany: "CuMinds Innovations",
    experienceX: "Experience"
  },
  {
    id: 2,
    name: "Stephanie Fonseca",
    position: "Chief Of Staff at Datazoic Inc.",
    url: "linkedin.com/in/stephanie-fonseca",
    pastProfessionalRole: true,
    currentRole: true,
    employmentAtA: true,
    experienceSummary: "Stephanie Fonseca has extensive experience in operations...",
    currentCompany: "Datazoic Inc.",
    experienceX: "Experience"
  },
  {
    id: 3,
    name: "Eilah Berlow",
    position: "Business Operations Consultant | Strategic Ops Leader",
    url: "linkedin.com/in/eilah-berlow",
    pastProfessionalRole: true,
    currentRole: true,
    employmentAtA: true,
    experienceSummary: "Eilah Berlow has extensive experience in operations",
    currentCompany: "Axonis Therapeutics",
    experienceX: "Eilah Berlow"
  },
  {
    id: 4,
    name: "Archie Rahman",
    position: "Startup Operations Manager | NYC",
    url: "linkedin.com/in/archie-rahman",
    pastProfessionalRole: true,
    currentRole: true,
    employmentAtA: true,
    experienceSummary: "Archie Rahman has over 10 years of experience in operations",
    currentCompany: "International Rescue Committee",
    experienceX: "Archie Rahman"
  },
  {
    id: 5,
    name: "Elle S.",
    position: "Experienced Chief of Staff for C-Suite Executives",
    url: "linkedin.com/in/elle-s",
    pastProfessionalRole: true,
    currentRole: true,
    employmentAtA: true,
    experienceSummary: "Elle S. has over 6 years of experience as Chief of Staff",
    currentCompany: "Ready Life",
    experienceX: "Experience"
  },
  {
    id: 6,
    name: "Joshua Mueller",
    position: "People Operations Professional | HR Leader",
    url: "linkedin.com/in/joshua-mueller",
    pastProfessionalRole: true,
    currentRole: true,
    employmentAtA: true,
    experienceSummary: "Joshua Mueller has over 7 years of experience in HR",
    currentCompany: "Self-employed",
    experienceX: "Experience"
  },
  {
    id: 7,
    name: "Keziah Wonstolen",
    position: "Hire a Chief of Staff | Founder & COO",
    url: "linkedin.com/in/keziah-wonstolen",
    pastProfessionalRole: true,
    currentRole: true,
    employmentAtA: true,
    experienceSummary: "Keziah Wonstolen has over 8 years in operations",
    currentCompany: "Vannin Chief of Staff",
    experienceX: "Keziah Wonstolen"
  },
  {
    id: 8,
    name: "John Tabakci",
    position: "Business Operations Consultant",
    url: "linkedin.com/in/john-tabakci",
    pastProfessionalRole: true,
    currentRole: true,
    employmentAtA: true,
    experienceSummary: "Experience Summary",
    currentCompany: "Early-Stage/Start-up Ventures",
    experienceX: "Experience"
  },
  {
    id: 9,
    name: "Rebecca Burd",
    position: "Chief of Staff",
    url: "linkedin.com/in/rebecca-burd",
    pastProfessionalRole: true,
    currentRole: true,
    employmentAtA: true,
    experienceSummary: "Rebecca Burd has a diverse background in operations",
    currentCompany: "Clovyr",
    experienceX: "Rebecca Burd"
  },
  {
    id: 10,
    name: "Jenni Lee",
    position: "Business Operations",
    url: "linkedin.com/in/jenni-lee",
    pastProfessionalRole: true,
    currentRole: true,
    employmentAtA: true,
    experienceSummary: "Jenni Lee has a diverse background in operations",
    currentCompany: "Y ELLAS Executive Services",
    experienceX: "Experience"
  }
];

const EmployeeTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [layout, setLayout] = useState<'grid' | 'list'>('list');
  const totalPages = 1;

  return (
    <div className="w-full">
      {/* Table Controls */}
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            {currentPage} of {totalPages}
          </span>
          <Button variant="outline" size="icon" onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <SortAsc className="h-4 w-4" />
            Sort
          </Button>
          <Button variant="outline" size="icon" onClick={() => setLayout('grid')} className={layout === 'grid' ? 'bg-blue-50' : ''}>
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setLayout('list')} className={layout === 'list' ? 'bg-blue-50' : ''}>
            <LayoutList className="h-4 w-4" />
          </Button>
        </div>
        
        <div>
          <Button variant="outline" className="text-gray-500">
            Actions
          </Button>
          <Button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white">
            Add Enrichment
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[40px]">#</TableHead>
              <TableHead className="w-[200px]">
                <div className="flex items-center gap-1">
                  <span className="text-gray-500">Name</span>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  <span className="text-gray-500">Position</span>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  <span className="text-gray-500">URL</span>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  <span className="text-gray-500">Past Professional Role</span>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  <span className="text-gray-500">Current Role As</span>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  <span className="text-gray-500">Employment At A</span>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  <span className="text-gray-500">Experience Summary</span>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  <span className="text-gray-500">Current Company</span>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  <span className="text-gray-500">Experience</span>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employeesData.map((employee) => (
              <TableRow key={employee.id} className="hover:bg-gray-50">
                <TableCell>{employee.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <UserAvatar name={employee.name} />
                    <span className="font-medium">{employee.name}</span>
                  </div>
                </TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>
                  <a href={`https://${employee.url}`} className="text-blue-500 hover:underline">
                    {employee.url}
                  </a>
                </TableCell>
                <TableCell>
                  {employee.pastProfessionalRole && <MatchLabel />}
                </TableCell>
                <TableCell>
                  {employee.currentRole && <MatchLabel />}
                </TableCell>
                <TableCell>
                  {employee.employmentAtA && <MatchLabel />}
                </TableCell>
                <TableCell>{employee.experienceSummary}</TableCell>
                <TableCell>{employee.currentCompany}</TableCell>
                <TableCell>{employee.experienceX}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default EmployeeTable;
