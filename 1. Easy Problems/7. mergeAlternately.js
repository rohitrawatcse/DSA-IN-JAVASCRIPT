// mergeAlternately











// In Java

// class Solution {
//     public String mergeAlternately(String word1, String word2) {

//         int len1 = word1.length();
//         int len2 = word2.length();
//         int i = 0, j = 0;
//         StringBuilder result = new StringBuilder();

//         while (i < len1 && j < len2) {
//             result.append(word1.charAt(i++));
//             result.append(word2.charAt(j++));
//         }

        // Append any remaining characters from word1
//         while (i < len1) {
//             result.append(word1.charAt(i++));
//         }

        // Append any remaining characters from word2
//         while (j < len2) {
//             result.append(word2.charAt(j++));
//         }

//         return result.toString();
        
//     }
// }