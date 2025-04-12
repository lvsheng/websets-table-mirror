
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  name: string;
  imageSrc?: string;
}

const UserAvatar = ({ name, imageSrc }: UserAvatarProps) => {
  const initials = name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .slice(0, 2);

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={imageSrc} alt={name} />
      <AvatarFallback className="bg-gray-200 text-gray-700">
        {initials}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
