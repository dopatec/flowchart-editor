import { useState } from 'react';
    import { Link } from 'react-router-dom';

    export default function Onboarding() {
      const [step, setStep] = useState(1);

      const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
      const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

      return (
        <div className="min-h-screen bg-background text-text p-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center gap-4 mb-8">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= num ? 'bg-primary text-white' : 'bg-surface text-text-secondary'
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>

            <div className="bg-surface p-8 rounded-lg">
              {step === 1 && (
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-primary mb-4">Welcome to Flowchart Editor</h2>
                  <p className="text-text-secondary">Let's get you started with creating amazing flowcharts</p>
                </div>
              )}

              {step === 2 && (
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-primary mb-4">Create Your First Flowchart</h2>
                  <p className="text-text-secondary">Drag and drop elements to build your process</p>
                </div>
              )}

              {step === 3 && (
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-primary mb-4">Ready to Start?</h2>
                  <p className="text-text-secondary">Create an account or sign in to save your work</p>
                </div>
              )}

              <div className="flex justify-center gap-4 mt-8">
                {step > 1 && (
                  <button
                    onClick={prevStep}
                    className="bg-surface text-primary px-6 py-2 rounded-lg border border-primary"
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    onClick={nextStep}
                    className="bg-primary text-white px-6 py-2 rounded-lg"
                  >
                    Next
                  </button>
                ) : (
                  <Link
                    to="/auth"
                    className="bg-primary text-white px-6 py-2 rounded-lg"
                  >
                    Get Started
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
