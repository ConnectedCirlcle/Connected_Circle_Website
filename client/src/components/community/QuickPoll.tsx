import { useState } from 'react';
import { RustButton } from '@/components/ui/button-variants';
import { toast } from '@/hooks/use-toast';

interface PollOption {
  id: string;
  text: string;
  votes: number;
}

const QuickPoll = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [pollOptions, setPollOptions] = useState<PollOption[]>([
    { id: '1', text: 'Navigating In-Law Relationships', votes: 126 },
    { id: '2', text: 'Teaching Kids Financial Literacy', votes: 269 },
    { id: '3', text: 'Work-Life Balance for Parents', votes: 236 },
    { id: '4', text: 'Technology Boundaries for Families', votes: 211 }
  ]);
  
  const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0);
  
  const handleVote = async () => {
    if (!selectedOption) {
      toast({
        title: "Please select an option",
        variant: "destructive"
      });
      return;
    }
    
    try {
      // Get the numeric ID from the option ID string
      const optionId = parseInt(selectedOption.replace(/\D/g, ''));
      
      const response = await fetch('/api/poll-vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          pollId: 1, // We have only one poll for now
          optionId: optionId || 1 // Fallback to 1 if parsing fails
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to record vote');
      }
      
      const data = await response.json();
      
      // Update the poll options with the results from the server
      if (data.results && data.results.options) {
        setPollOptions(data.results.options.map((opt: any) => ({
          id: `option${opt.id}`, // Convert back to string format
          text: opt.text,
          votes: opt.votes
        })));
      } else {
        // Fallback to updating locally if the server doesn't return results
        const updatedOptions = pollOptions.map(option => 
          option.id === selectedOption 
            ? { ...option, votes: option.votes + 1 } 
            : option
        );
        setPollOptions(updatedOptions);
      }
      
      setHasVoted(true);
      
      toast({
        title: "Vote recorded!",
        description: "Thank you for participating in our poll."
      });
    } catch (error) {
      console.error('Error recording vote:', error);
      toast({
        title: "Error recording vote",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-md p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="font-['Playfair_Display'] font-bold text-2xl mb-4">Quick Poll</h3>
          <p className="text-[#8A8A8A] mb-6">We want to hear from you! What topic would you like us to cover next?</p>
          
          <div className="space-y-3">
            {pollOptions.map(option => (
              <label 
                key={option.id}
                className={`flex items-center p-3 border ${
                  selectedOption === option.id ? 'border-[#B2593C]' : 'border-gray-300'
                } rounded-lg hover:border-[#B2593C] cursor-pointer`}
              >
                <input 
                  type="radio" 
                  name="poll" 
                  className="mr-3"
                  checked={selectedOption === option.id}
                  onChange={() => setSelectedOption(option.id)}
                  disabled={hasVoted}
                />
                <span>{option.text}</span>
              </label>
            ))}
            
            <RustButton 
              className="mt-4" 
              onClick={handleVote}
              disabled={hasVoted}
            >
              {hasVoted ? 'Voted' : 'Vote'}
            </RustButton>
          </div>
        </div>
        
        <div className="bg-[#F8F1E6] p-8 rounded-xl">
          <h3 className="font-['Playfair_Display'] font-bold text-xl mb-4">Current Results</h3>
          
          <div className="space-y-4">
            {pollOptions.map(option => {
              const percentage = totalVotes > 0 
                ? Math.round((option.votes / totalVotes) * 100) 
                : 0;
                
              return (
                <div key={option.id}>
                  <div className="flex justify-between mb-1">
                    <span>{option.text}</span>
                    <span>{percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-[#B2593C] h-2.5 rounded-full" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
            
            <p className="text-sm text-[#8A8A8A] mt-4">Total votes: {totalVotes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickPoll;
