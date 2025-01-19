import { Link } from 'react-router-dom';
    import { FaChartLine, FaLightbulb, FaRocket } from 'react-icons/fa';

    export default function Landing() {
      return (
        <div className="min-h-screen bg-background text-text p-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center py-20">
              <h1 className="text-5xl font-bold text-primary mb-4">Flowchart Editor</h1>
              <p className="text-xl text-text-secondary mb-8">Create and manage your flowcharts with ease</p>
              <div className="flex justify-center gap-4">
                <Link to="/onboarding" className="bg-primary text-white px-6 py-3 rounded-lg text-lg">
                  Get Started
                </Link>
                <Link to="/auth" className="border border-primary text-primary px-6 py-3 rounded-lg text-lg">
                  Sign In
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <div className="bg-surface p-8 rounded-lg">
                <div className="text-primary text-4xl mb-4"><FaChartLine /></div>
                <h3 className="text-xl font-bold text-primary mb-2">Visualize Processes</h3>
                <p className="text-text-secondary">Create clear and comprehensive flowcharts</p>
              </div>
              <div className="bg-surface p-8 rounded-lg">
                <div className="text-primary text-4xl mb-4"><FaLightbulb /></div>
                <h3 className="text-xl font-bold text-primary mb-2">Intuitive Interface</h3>
                <p className="text-text-secondary">Easy-to-use drag and drop editor</p>
              </div>
              <div className="bg-surface p-8 rounded-lg">
                <div className="text-primary text-4xl mb-4"><FaRocket /></div>
                <h3 className="text-xl font-bold text-primary mb-2">Fast & Efficient</h3>
                <p className="text-text-secondary">Build flowcharts in minutes</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
