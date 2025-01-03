const questions = [
  {
    title: "86. Partition List",
    description: "Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x. You should preserve the original relative order of the nodes in each of the two partitions.",
    difficulty: "Medium",
    avgTime: "7 Min",
    expectedComplexity: "O(logn)",
    constraints: [
      "The number of nodes in the list is in the range [0, 200].",
      "-100 <= Node.val <= 100",
      "-200 <= x <= 200"
    ],
    examples: [
      { input: "head = [1,4,3,2,5,2], x = 3", output: "[1,2,2,4,3,5]" },
      { input: "head = [2,1], x = 2", output: "[1,2]" },
      { input: "head = [5,1,7,3], x = 4", output: "[1,3,5,7]" }
    ],
    testCases: [
      { input: "head = [1,4,3,2,5,2], x = 3", output: "[1,2,2,4,3,5]" },
      { input: "head = [2,1], x = 2", output: "[1,2]" },
      { input: "head = [5,1,7,3], x = 4", output: "[1,3,5,7]" }
    ]
  },
  {
    title: "21. Merge Two Sorted Lists",
    description: "Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.",
    difficulty: "Easy",
    avgTime: "5 Min",
    expectedComplexity: "O(n + m)",
    constraints: [
      "The number of nodes in each list is in the range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = [0]", output: "[0]" }
    ],
    testCases: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = [0]", output: "[0]" },
      { input: "list1 = [5], list2 = [1,2,3,4]", output: "[1,2,3,4,5]" }
    ]
  },
  {
    title: "141. Linked List Cycle",
    description: "Given a linked list, determine if it has a cycle in it.",
    difficulty: "Easy",
    avgTime: "5 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 104].",
      "-100 <= Node.val <= 100"
    ],
    examples: [
      { input: "head = [3,2,0,-4], pos = 1", output: "True" },
      { input: "head = [1,2], pos = 0", output: "True" }
    ],
    testCases: [
      { input: "head = [3,2,0,-4], pos = 1", output: "True" },
      { input: "head = [1,2], pos = 0", output: "True" },
      { input: "head = [1], pos = -1", output: "False" }
    ]
  },
  {
    title: "234. Palindrome Linked List",
    description: "Given a singly linked list, determine if it is a palindrome.",
    difficulty: "Easy",
    avgTime: "6 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [1, 10^5].",
      "-10^5 <= Node.val <= 10^5"
    ],
    examples: [
      { input: "head = [1,2,2,1]", output: "True" },
      { input: "head = [1,2]", output: "False" }
    ],
    testCases: [
      { input: "head = [1,2,2,1]", output: "True" },
      { input: "head = [1,2]", output: "False" }
    ]
  },
  {
    title: "203. Remove Linked List Elements",
    description: "Remove all elements from a linked list of integers that have a value of val.",
    difficulty: "Easy",
    avgTime: "6 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 100].",
      "-100 <= Node.val <= 100",
      "0 <= val <= 100"
    ],
    examples: [
      { input: "head = [1,2,6,3,4,5,6], val = 6", output: "[1,2,3,4,5]" },
      { input: "head = [], val = 1", output: "[]" }
    ],
    testCases: [
      { input: "head = [1,2,6,3,4,5,6], val = 6", output: "[1,2,3,4,5]" },
      { input: "head = [], val = 1", output: "[]" }
    ]
  },
  {
    title: "2. Add Two Numbers",
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return it as a linked list.",
    difficulty: "Medium",
    avgTime: "6 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in each list is in the range [1, 100].",
      "0 <= Node.val <= 9"
    ],
    examples: [
      { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]" },
      { input: "l1 = [0], l2 = [0]", output: "[0]" }
    ],
    testCases: [
      { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]" },
      { input: "l1 = [0], l2 = [0]", output: "[0]" }
    ]
  },
  {
    title: "83. Remove Duplicates from Sorted List",
    description: "Given a sorted linked list, delete all duplicates such that each element appears only once.",
    difficulty: "Easy",
    avgTime: "5 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 300].",
      "-100 <= Node.val <= 100"
    ],
    examples: [
      { input: "head = [1,1,2]", output: "[1,2]" },
      { input: "head = [1,1,2,3,3]", output: "[1,2,3]" }
    ],
    testCases: [
      { input: "head = [1,1,2]", output: "[1,2]" },
      { input: "head = [1,1,2,3,3]", output: "[1,2,3]" }
    ]
  },
  {
    title: "141. Linked List Cycle II",
    description: "Given a linked list, return the node where the cycle begins. If there is no cycle, return null.",
    difficulty: "Medium",
    avgTime: "8 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 104].",
      "-100 <= Node.val <= 100"
    ],
    examples: [
      { input: "head = [3,2,0,-4], pos = 1", output: "2" },
      { input: "head = [1,2], pos = 0", output: "1" }
    ],
    testCases: [
      { input: "head = [3,2,0,-4], pos = 1", output: "2" },
      { input: "head = [1,2], pos = 0", output: "1" }
    ]
  },
  {
    title: "160. Intersection of Two Linked Lists",
    description: "Write a program to find the node where two singly linked lists intersect. If there is no intersection, return null.",
    difficulty: "Easy",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-10^4 <= Node.val <= 10^4"
    ],
    examples: [
      { input: "headA = [4,1,8,4,5], headB = [5,6,1,8,4,5]", output: "8" },
      { input: "headA = [1,9,1,2,4], headB = [3,2,4]", output: "2" }
    ],
    testCases: [
      { input: "headA = [4,1,8,4,5], headB = [5,6,1,8,4,5]", output: "8" },
      { input: "headA = [1,9,1,2,4], headB = [3,2,4]", output: "2" }
    ]
  },
  {
    title: "206. Reverse Linked List",
    description: "Reverse a singly linked list.",
    difficulty: "Easy",
    avgTime: "5 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-100 <= Node.val <= 100"
    ],
    examples: [
      { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" },
      { input: "head = [1,2]", output: "[2,1]" }
    ],
    testCases: [
      { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" },
      { input: "head = [1,2]", output: "[2,1]" }
    ]
  },
  {
    title: "19. Remove Nth Node From End of List",
    description: "Remove the N-th node from the end of the list and return its head.",
    difficulty: "Medium",
    avgTime: "6 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [1, 30].",
      "1 <= n <= length of list"
    ],
    examples: [
      { input: "head = [1,2,3,4,5], n = 2", output: "[1,2,3,5]" },
      { input: "head = [1], n = 1", output: "[]" }
    ],
    testCases: [
      { input: "head = [1,2,3,4,5], n = 2", output: "[1,2,3,5]" },
      { input: "head = [1], n = 1", output: "[]" }
    ]
  },
  {
    title: "24. Swap Nodes in Pairs",
    description: "Swap every two adjacent nodes and return its head.",
    difficulty: "Medium",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    examples: [
      { input: "head = [1,2,3,4]", output: "[2,1,4,3]" },
      { input: "head = [1,2,3,4,5]", output: "[2,1,4,3,5]" }
    ],
    testCases: [
      { input: "head = [1,2,3,4]", output: "[2,1,4,3]" },
      { input: "head = [1,2,3,4,5]", output: "[2,1,4,3,5]" }
    ]
  },
  {
    title: "92. Reverse Linked List II",
    description: "Reverse a linked list from position m to n. Do it in one-pass.",
    difficulty: "Medium",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [1, 500].",
      "1 <= m <= n <= length of list"
    ],
    examples: [
      { input: "head = [1,2,3,4,5], m = 2, n = 4", output: "[1,4,3,2,5]" },
      { input: "head = [5], m = 1, n = 1", output: "[5]" }
    ],
    testCases: [
      { input: "head = [1,2,3,4,5], m = 2, n = 4", output: "[1,4,3,2,5]" },
      { input: "head = [5], m = 1, n = 1", output: "[5]" }
    ]
  },
  {
    title: "328. Odd Even Linked List",
    description: "Given a singly linked list, group all odd nodes together followed by the even nodes. Please note that the relative order inside both the even and odd groups should remain as it was in the input list.",
    difficulty: "Medium",
    avgTime: "6 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-100 <= Node.val <= 100"
    ],
    examples: [
      { input: "head = [1,2,3,4,5]", output: "[1,3,5,2,4]" },
      { input: "head = [2,1,3,5,6,4,7]", output: "[2,3,6,7,1,5,4]" }
    ],
    testCases: [
      { input: "head = [1,2,3,4,5]", output: "[1,3,5,2,4]" },
      { input: "head = [2,1,3,5,6,4,7]", output: "[2,3,6,7,1,5,4]" }
    ]
  },
  {
    title: "147. Insertion Sort List",
    description: "Sort a linked list using insertion sort.",
    difficulty: "Medium",
    avgTime: "8 Min",
    expectedComplexity: "O(n^2)",
    constraints: [
      "The number of nodes in the list is in the range [1, 10^4].",
      "-1000 <= Node.val <= 1000"
    ],
    examples: [
      { input: "head = [4,2,1,3]", output: "[1,2,3,4]" },
      { input: "head = [-1,5,3,4,0]", output: "[-1,0,3,4,5]" }
    ],
    testCases: [
      { input: "head = [4,2,1,3]", output: "[1,2,3,4]" },
      { input: "head = [-1,5,3,4,0]", output: "[-1,0,3,4,5]" }
    ]
  },
  {
    title: "141. Linked List Cycle II",
    description: "Given a linked list, return the node where the cycle begins. If there is no cycle, return null.",
    difficulty: "Medium",
    avgTime: "8 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-100 <= Node.val <= 100"
    ],
    examples: [
      { input: "head = [3,2,0,-4], pos = 1", output: "2" },
      { input: "head = [1,2], pos = 0", output: "1" }
    ],
    testCases: [
      { input: "head = [3,2,0,-4], pos = 1", output: "2" },
      { input: "head = [1,2], pos = 0", output: "1" }
    ]
  },
  {
    title: "203. Remove Linked List Elements",
    description: "Remove all elements from a linked list of integers that have a value of val.",
    difficulty: "Easy",
    avgTime: "6 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 100].",
      "-100 <= Node.val <= 100",
      "0 <= val <= 100"
    ],
    examples: [
      { input: "head = [1,2,6,3,4,5,6], val = 6", output: "[1,2,3,4,5]" },
      { input: "head = [], val = 1", output: "[]" }
    ],
    testCases: [
      { input: "head = [1,2,6,3,4,5,6], val = 6", output: "[1,2,3,4,5]" },
      { input: "head = [], val = 1", output: "[]" }
    ]
  },
  {
    title: "160. Intersection of Two Linked Lists",
    description: "Write a program to find the node where two singly linked lists intersect. If there is no intersection, return null.",
    difficulty: "Easy",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-10^4 <= Node.val <= 10^4"
    ],
    examples: [
      { input: "headA = [4,1,8,4,5], headB = [5,6,1,8,4,5]", output: "8" },
      { input: "headA = [1,9,1,2,4], headB = [3,2,4]", output: "2" }
    ],
    testCases: [
      { input: "headA = [4,1,8,4,5], headB = [5,6,1,8,4,5]", output: "8" },
      { input: "headA = [1,9,1,2,4], headB = [3,2,4]", output: "2" }
    ]
  },
  {
    title: "25. Reverse Nodes in k-Group",
    description: "Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.",
    difficulty: "Hard",
    avgTime: "10 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [1, 10^4].",
      "1 <= k <= length of list"
    ],
    examples: [
      { input: "head = [1,2,3,4,5], k = 3", output: "[3,2,1,4,5]" },
      { input: "head = [1,2,3,4,5], k = 1", output: "[1,2,3,4,5]" }
    ],
    testCases: [
      { input: "head = [1,2,3,4,5], k = 3", output: "[3,2,1,4,5]" },
      { input: "head = [1,2,3,4,5], k = 1", output: "[1,2,3,4,5]" }
    ]
  },
  {
    title: "61. Rotate List",
    description: "Given a linked list, rotate the list to the right by k places.",
    difficulty: "Medium",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 500].",
      "-100 <= Node.val <= 100"
    ],
    examples: [
      { input: "head = [1,2,3,4,5], k = 2", output: "[4,5,1,2,3]" },
      { input: "head = [0,1,2], k = 4", output: "[2,0,1]" }
    ],
    testCases: [
      { input: "head = [1,2,3,4,5], k = 2", output: "[4,5,1,2,3]" },
      { input: "head = [0,1,2], k = 4", output: "[2,0,1]" }
    ]
  },
  {
    title: "203. Remove Linked List Elements",
    description: "Remove all elements from a linked list of integers that have a value of val.",
    difficulty: "Easy",
    avgTime: "6 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 100].",
      "-100 <= Node.val <= 100",
      "0 <= val <= 100"
    ],
    examples: [
      { input: "head = [1,2,6,3,4,5,6], val = 6", output: "[1,2,3,4,5]" },
      { input: "head = [], val = 1", output: "[]" }
    ],
    testCases: [
      { input: "head = [1,2,6,3,4,5,6], val = 6", output: "[1,2,3,4,5]" },
      { input: "head = [], val = 1", output: "[]" }
    ]
  },
  {
    title: "2. Add Two Numbers",
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.",
    difficulty: "Medium",
    avgTime: "8 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 <= Node.val <= 9"
    ],
    examples: [
      { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]" },
      { input: "l1 = [0], l2 = [0]", output: "[0]" }
    ],
    testCases: [
      { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]" },
      { input: "l1 = [0], l2 = [0]", output: "[0]" }
    ]
  },
  {
    title: "143. Reorder List",
    description: "Given a singly linked list, reorder it such that the list becomes: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...",
    difficulty: "Medium",
    avgTime: "9 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [1, 10^4].",
      "-100 <= Node.val <= 100"
    ],
    examples: [
      { input: "head = [1,2,3,4]", output: "[1,4,2,3]" },
      { input: "head = [1,2,3,4,5]", output: "[1,5,2,4,3]" }
    ],
    testCases: [
      { input: "head = [1,2,3,4]", output: "[1,4,2,3]" },
      { input: "head = [1,2,3,4,5]", output: "[1,5,2,4,3]" }
    ]
  },
  {
    title: "160. Intersection of Two Linked Lists",
    description: "Write a program to find the node where two singly linked lists intersect. If there is no intersection, return null.",
    difficulty: "Easy",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-10^4 <= Node.val <= 10^4"
    ],
    examples: [
      { input: "headA = [4,1,8,4,5], headB = [5,6,1,8,4,5]", output: "8" },
      { input: "headA = [1,9,1,2,4], headB = [3,2,4]", output: "2" }
    ],
    testCases: [
      { input: "headA = [4,1,8,4,5], headB = [5,6,1,8,4,5]", output: "8" },
      { input: "headA = [1,9,1,2,4], headB = [3,2,4]", output: "2" }
    ]
  },
  {
    title: "25. Reverse Nodes in k-Group",
    description: "Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.",
    difficulty: "Hard",
    avgTime: "10 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [1, 10^4].",
      "1 <= k <= length of list"
    ],
    examples: [
      { input: "head = [1,2,3,4,5], k = 3", output: "[3,2,1,4,5]" },
      { input: "head = [1,2,3,4,5], k = 1", output: "[1,2,3,4,5]" }
    ],
    testCases: [
      { input: "head = [1,2,3,4,5], k = 3", output: "[3,2,1,4,5]" },
      { input: "head = [1,2,3,4,5], k = 1", output: "[1,2,3,4,5]" }
    ]
  },
  {
    title: "21. Merge Two Sorted Lists",
    description: "Merge two sorted linked lists and return it as a new sorted list.",
    difficulty: "Easy",
    avgTime: "5 Min",
    expectedComplexity: "O(n + m)",
    constraints: [
      "The number of nodes in each list is in the range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = [0]", output: "[0]" }
    ],
    testCases: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = [0]", output: "[0]" }
    ]
  },
  {
    title: "141. Linked List Cycle",
    description: "Given a linked list, determine if it has a cycle in it.",
    difficulty: "Easy",
    avgTime: "5 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-100 <= Node.val <= 100"
    ],
    examples: [
      { input: "head = [3,2,0,-4], pos = 1", output: "True" },
      { input: "head = [1,2], pos = 0", output: "True" }
    ],
    testCases: [
      { input: "head = [3,2,0,-4], pos = 1", output: "True" },
      { input: "head = [1,2], pos = 0", output: "True" }
    ]
  },
  {
    title: "82. Remove Duplicates from Sorted List II",
    description: "Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.",
    difficulty: "Medium",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-100 <= Node.val <= 100"
    ],
    examples: [
      { input: "head = [1,2,3,3,4,4,5]", output: "[1,2,5]" },
      { input: "head = [1,1,1,2,3]", output: "[2,3]" }
    ],
    testCases: [
      { input: "head = [1,2,3,3,4,4,5]", output: "[1,2,5]" },
      { input: "head = [1,1,1,2,3]", output: "[2,3]" }
    ]
  },
  {
    title: "61. Rotate List",
    description: "Given a linked list, rotate the list to the right by k places.",
    difficulty: "Medium",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 500].",
      "-100 <= Node.val <= 100"
    ],
    examples: [
      { input: "head = [1,2,3,4,5], k = 2", output: "[4,5,1,2,3]" },
      { input: "head = [0,1,2], k = 4", output: "[2,0,1]" }
    ],
    testCases: [
      { input: "head = [1,2,3,4,5], k = 2", output: "[4,5,1,2,3]" },
      { input: "head = [0,1,2], k = 4", output: "[2,0,1]" }
    ]
  },
  {
    title: "2. Add Two Numbers",
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.",
    difficulty: "Medium",
    avgTime: "8 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 <= Node.val <= 9"
    ],
    examples: [
      { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]" },
      { input: "l1 = [0], l2 = [0]", output: "[0]" }
    ],
    testCases: [
      { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]" },
      { input: "l1 = [0], l2 = [0]", output: "[0]" }
    ]
  },
  {
    title: "234. Palindrome Linked List",
    description: "Given a singly linked list, determine if it is a palindrome.",
    difficulty: "Easy",
    avgTime: "6 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [1, 10^5].",
      "-10^5 <= Node.val <= 10^5"
    ],
    examples: [
      { input: "head = [1,2,2,1]", output: "True" },
      { input: "head = [1,2]", output: "False" }
    ],
    testCases: [
      { input: "head = [1,2,2,1]", output: "True" },
      { input: "head = [1,2]", output: "False" }
    ]
  },
  {
    title: "86. Partition List",
    description: "Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.",
    difficulty: "Medium",
    avgTime: "7 Min",
    expectedComplexity: "O(n)",
    constraints: [
      "The number of nodes in the list is in the range [0, 200].",
      "0 <= Node.val <= 50"
    ],
    examples: [
      { input: "head = [1,4,3,2,5,2], x = 3", output: "[1,2,2,4,3,5]" },
      { input: "head = [2,1], x = 2", output: "[1,2]" }
    ],
    testCases: [
      { input: "head = [1,4,3,2,5,2], x = 3", output: "[1,2,2,4,3,5]" },
      { input: "head = [2,1], x = 2", output: "[1,2]" }
    ]
  }
];

export default questions;
