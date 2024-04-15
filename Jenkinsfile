def COLOR_MAP = [
    'FAILURE': 'danger',
    'SUCCESS': 'good'
]

pipeline {
    agent any
    tools {
        nodejs '21.7.3'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    git branch: 'master', url: 'https://github.com/KoomeSpace/gallery.git'
                }
            }
        }
        
        stage('Make first change to landing page') {
            steps {
                // Make changes to the landing page
                sh 'echo "<h1>MILESTONE 2</h1>" >> ./views/index.ejs'
            }
        }

        stage ('Test') {
            steps {
                sh 'npm install' // Adding npm install step
                sh 'npm test'
            }
        }

        stage('Update Landing Page 2') {
            steps {
                // Make changes to the landing page
                sh 'echo "<h1>MILESTONE 3</h1>" >> ./views/index.ejs'
            }
        }

        stage('Update Landing Page 3') {
            steps {
                // Make changes to the landing page
                sh 'echo "<h1>MILESTONE 4</h1>" >> ./views/index.ejs'
            }
            post {
                always {
                    echo 'Slack channel notification'
                    slackSend(
                        channel: '#devops05',
                        color: COLOR_MAP[currentBuild.currentResult],
                        message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} \n build ${env.BUILD_NUMBER} \n more info at: ${env.BUILD_URL}"
                    )
                }
            }    
        }
    }
}
