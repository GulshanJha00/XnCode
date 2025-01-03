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
      {
        input: "head = [1,4,3,2,5,2], x = 3",
        output: "[1,2,2,4,3,5]"
      },
      {
        input: "head = [2,1], x = 2",
        output: "[1,2]"
      }
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
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]"
      },
      {
        input: "list1 = [], list2 = [0]",
        output: "[0]"
      }
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
      {
        input: "head = [3,2,0,-4], pos = 1",
        output: "True"
      },
      {
        input: "head = [1,2], pos = 0",
        output: "True"
      }
    ],
    testCases: [
      { input: "head = [3,2,0,-4], pos = 1", output: "True" },
      { input: "head = [1,2], pos = 0", output: "True" },
      { input: "head = [1], pos = -1", output: "False" }
    ]
  }
];
export default questions