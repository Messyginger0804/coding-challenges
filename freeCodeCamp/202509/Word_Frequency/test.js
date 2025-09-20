function extractKeywords(text, count = 5) {
const STOP_WORDS = new Set([
  'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and',
  'any', 'are', 'as', 'at', 'be', 'because', 'been', 'before', 'being', 'below',
  'between', 'both', 'but', 'by', 'can', 'did', 'do', 'does', 'doing', 'down',
  'during', 'each', 'few', 'for', 'from', 'further', 'had', 'has', 'have', 'having',
  'he', 'her', 'here', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'i',
  'if', 'in', 'into', 'is', 'it', 'its', 'itself', 'just', 'me', 'more', 'most',
  'my', 'myself', 'no', 'nor', 'not', 'now', 'o', 'of', 'on', 'once', 'only',
  'or', 'other', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 's', 'same',
  'she', 'should', 'so', 'some', 'such', 't', 'than', 'that', 'the', 'their',
  'theirs', 'them', 'themselves', 'then', 'there', 'these', 'they', 'this', 'those',
  'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was', 'we', 'were',
  'what', 'when', 'where', 'which', 'while', 'who', 'whom', 'why', 'will', 'with',
  'you', 'your', 'yours', 'yourself', 'yourselves'
]);

  const words = text.toLowerCase().match(/\b(\w+)\b/g) || [];
  const freq = {};

  for (const word of words) {
    if (!STOP_WORDS.has(word) && word.length > 2) {
      freq[word] = (freq[word] || 0) + 1;
    }
    console.log(freq)
  }

  console.log(freq)

  const answer = Object.keys(freq)
    .sort((a, b) => freq[b] - freq[a])
    .slice(0, count);

        console.log(answer)
  return answer
}

const article = `Parking is complimentary. We're minutes from downtown Ogden, Snowbasin Resort, Pineview Reservoir, and major canyon trailheads. Rideshare and taxi services operate in the area; self-driving offers the most flexibility for sightseeing.`


extractKeywords("I like coding. I like testing. I love debugging!", count = 5)