import React from "react";
import { View, Text, TextInput } from "react-native";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

export default function PasswordInput({ value, onChange, error }: PasswordInputProps) {
  return (
    <View className="mb-4">
      <Text className="text-lg font-semibold mb-2">Contraseña</Text>
      <TextInput
        className={`border p-3 rounded-lg text-base ${error ? 'border-red-500' : 'border-gray-300'}`}
        placeholder="Tu contraseña"
        secureTextEntry
        value={value}
        onChangeText={onChange}
      />
      {error && <Text className="text-red-500 mt-1">{error}</Text>}
    </View>
  );
}
