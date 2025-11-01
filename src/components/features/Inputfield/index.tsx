"use client";

import React, { use } from "react";
import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

const InputField = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  return <p>InputField</p>;
};

export default InputField;
